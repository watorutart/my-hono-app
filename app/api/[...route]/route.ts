import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!'
  })
})

app.get('/test/form', (c) => {
  return c.json([
    {
      formKey: 'testForm1',
      formType: 'text',
    },
    {
      formKey: 'testForm2',
      formType: 'combobox',
    },
  ])
})

app.post('/test/form', (c) => {
  return c.json({
    message: 'Form submitted successfully!'
  })
})


export const GET = handle(app)
export const POST = handle(app)
