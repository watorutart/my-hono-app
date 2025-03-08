import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import testFormRouter from './routes/test-form'
import {zValidator} from '@hono/zod-validator'
import {z} from 'zod';

export const runtime = 'edge'

// appをエクスポートして、テストでアクセスできるようにする
export const app = new Hono().basePath('/api')

app.get('/hello', zValidator('query', z.object({ name: z.string() })), (c) => {
  const { name } = c.req.valid('query');

  return c.json({
    message: `Hello! ${name}`
  })
})

// /test/form エンドポイントをマウント
app.route('/test/form', testFormRouter)

export const GET = handle(app)
export const POST = handle(app)
