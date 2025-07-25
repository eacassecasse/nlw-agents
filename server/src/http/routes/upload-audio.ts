import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { client } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";
import { generateEmbedding, transcribeAudio } from "../../services/gemini.ts";
import { sql } from "drizzle-orm";

export const uploadAudioRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    "/rooms/:roomId/audio",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params;
      const audio = await request.file();

      if (!audio) {
        throw new Error("Audio is required");
      }

      const audioBuffer = await audio.toBuffer();
      const audioAsBase64 = audioBuffer.toString("base64");
      const transcription = await transcribeAudio(
        audioAsBase64,
        audio.mimetype
      );

      const embeddings = await generateEmbedding(transcription);

      const result = await client
        .insert(schema.audioChunks)
        .values({
          roomId,
          transcription,
          embeddings: sql`'${embeddings.join(", ")}'::vector`,
        })
        .returning();

      const chunk = result[0];

      if (!chunk) {
        throw new Error("Não foi possível salvar o áudio no banco de dados");
      }

      return reply.status(201).send({ chunkId: chunk.id });
      // 1. Transcrever o audio usando Gemini
      // 2. Gerar o vetor semântico/embedding do audio usando o Gemini
      // 3. Armazenar os vectores no banco de dados
    }
  );
};
