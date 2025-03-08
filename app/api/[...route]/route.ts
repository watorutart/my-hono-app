import { Hono } from "hono";
import { handle } from "hono/vercel";
import testFormRouter from "./routes/test-form";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { describeRoute, openAPISpecs } from "hono-openapi";

export const runtime = "edge";

// appをエクスポートして、テストでアクセスできるようにする
export const app = new Hono().basePath("/api");

const querySchema = z.object({
  name: z.string().optional(),
});

// TODO: OASを生成したいがまだ途中
// app.get(
//   "/openapi",
//   openAPISpecs(app, {
//     documentation: {
//       title: "My API",
//       version: "1.0.0",
//       description: "My API description",
//     },
//     servers: [
//       {
//         url: "http://localhost:3003",
//         description: "Local server",
//       },
//     ],
//   })
// );

app.get(
  "/hello",
  describeRoute({
    description: "Helloエンドポイント",
    responses: {
      200: {
        description: "成功",
        content: {
          "application/json": {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
      },
    },
  }),
  zValidator("query", querySchema),
  (c) => {
    const { name } = c.req.valid("query");

    return c.json({
      message: `Hello! ${name}`,
    });
  }
);

// /test/form エンドポイントをマウント
app.route("/test/form", testFormRouter);

export const GET = handle(app);
export const POST = handle(app);
