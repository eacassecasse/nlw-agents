import { reset, seed } from "drizzle-seed";
import { schema } from "./schema/index.ts";
import { client, sql } from "./connection.ts";

await reset(client, schema);

await seed(client, schema).refine((f) => {
  return {
    rooms: {
      count: 50,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
    questions: {
      count: 20,
    }
  };
});

await sql.end();

console.log("Database seeded...");
