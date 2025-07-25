import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { client } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";
import { count, eq } from "drizzle-orm";

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.get("/rooms", async () => {
    const results = await client
      .select({
        id: schema.rooms.id,
        name: schema.rooms.name,
        createdAt: schema.rooms.createAt,
        questionsCount: count(schema.questions.id),
      })
      .from(schema.rooms)
      .leftJoin(schema.questions, eq(schema.questions.roomId, schema.rooms.id))
      .groupBy(schema.rooms.id)
      .orderBy(schema.rooms.createAt);

    return results;
  });
};
