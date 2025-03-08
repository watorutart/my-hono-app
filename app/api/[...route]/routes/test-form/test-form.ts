import { Hono } from 'hono'

// test/form用のルーター
const testFormRouter = new Hono()

// GETエンドポイント
testFormRouter.get('/', (c) => {
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

// POSTエンドポイント
testFormRouter.post('/', (c) => {
  return c.json({
    message: 'Form submitted successfully!'
  })
})

export default testFormRouter