import { createApiApp } from './api'

const createMockRequest = (path: string, method = 'GET', body?: any) => {
  const url = new URL(`https://example.com${path}`)
  return new Request(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

describe('API Core Functions', () => {
  it('should create app without basePath and respond to /hello', async () => {
    const app = createApiApp()
    const req = createMockRequest('/hello')
    const res = await app.request(req)
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data).toEqual({ message: 'Hello from Hono!' })
  })

  it('should create app with basePath and respond to /api/hello', async () => {
    const app = createApiApp('/api')
    const req = createMockRequest('/api/hello')
    const res = await app.request(req)
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data).toEqual({ message: 'Hello from Hono!' })
  })
})