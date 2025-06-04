import { Hono } from 'hono'
import type { HelloResponse, FormListResponse, FormSubmissionResponse } from './types'

export function createApiApp(basePath?: string) {
  const app = basePath ? new Hono().basePath(basePath) : new Hono()

  app.get('/hello', (c) => {
    const response: HelloResponse = {
      message: 'Hello from Hono!'
    }
    return c.json(response)
  })

  app.get('/test/form', (c) => {
    const response: FormListResponse = [
      {
        formKey: 'testForm1',
        formType: 'text',
      },
      {
        formKey: 'testForm2',
        formType: 'combobox',
      },
    ]
    return c.json(response)
  })

  app.post('/test/form', (c) => {
    const response: FormSubmissionResponse = {
      message: 'Form submitted successfully!'
    }
    return c.json(response)
  })

  return app
}