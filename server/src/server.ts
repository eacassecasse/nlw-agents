import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import { fastifyMultipart } from '@fastify/multipart';
import { ENV } from "./env.ts";
import { getRoomsRoute } from "./http/routes/get-rooms.ts";
import { createRoomRoute } from "./http/routes/create-room.ts";
import { getRoomQuestionsRoute } from "./http/routes/get-room-questions.ts";
import { createQuestionRoute } from "./http/routes/create-question.ts";
import { uploadAudioRoute } from "./http/routes/upload-audio.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "https://automatic-enigma-4vgwpwqxjxq37v6v-5173.app.github.dev",
});
app.register(fastifyMultipart);

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/api/v1/health", () => {
  return { status: "OK" };
});

app.register(getRoomsRoute, { prefix: "/api/v1" });
app.register(createRoomRoute, { prefix: "/api/v1" });
app.register(getRoomQuestionsRoute, { prefix: "/api/v1" });
app.register(createQuestionRoute, { prefix: "/api/v1" });
app.register(uploadAudioRoute, { prefix: "/api/v1" });

app.listen({
  port: ENV.PORT,
});
