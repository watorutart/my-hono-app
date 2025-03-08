import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import testFormRouter from './routes/test-form'

export const runtime = 'edge'

// appをエクスポートして、テストでアクセスできるようにする
export const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!'
  })
})

// /test/form エンドポイントをマウント
app.route('/test/form', testFormRouter)

export const GET = handle(app)
export const POST = handle(app)
