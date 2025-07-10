import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { eq, desc } from "drizzle-orm";
import { z } from "zod/v4";
import { client } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

export const getRoomQuestionsRoute: FastifyPluginCallbackZod = (app) => {
  app.get(
    "/rooms/:roomId/questions",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request) => {
      const { roomId } = request.params;

      const results = await client
        .select({
          id: schema.questions.id,
          question: schema.questions.question,
          answer: schema.questions.answer,
          createdAt: schema.questions.createAt,
        })
        .from(schema.questions)
        .where(eq(schema.questions.roomId, roomId))
        .orderBy(desc(schema.questions.createAt));

      return results;
    }
  );
};
