import { createApiApp } from './src/index'
import type { HelloResponse, FormListResponse, FormSubmissionResponse } from './src/index'

describe('Submodule Integration Test', () => {
  it('should export and use createApiApp function correctly', async () => {
    const app = createApiApp('/api')
    
    // Test hello endpoint
    const helloReq = new Request('https://example.com/api/hello')
    const helloRes = await app.request(helloReq)
    expect(helloRes.status).toBe(200)
    
    const helloData = await helloRes.json() as HelloResponse
    expect(helloData.message).toBe('Hello from Hono!')
  })

  it('should export and use type definitions correctly', async () => {
    const app = createApiApp('/api')
    
    // Test form list endpoint with types
    const formReq = new Request('https://example.com/api/test/form')
    const formRes = await app.request(formReq)
    expect(formRes.status).toBe(200)
    
    const formData = await formRes.json() as FormListResponse
    expect(Array.isArray(formData)).toBe(true)
    expect(formData).toHaveLength(2)
    expect(formData[0]).toHaveProperty('formKey')
    expect(formData[0]).toHaveProperty('formType')
  })

  it('should handle POST requests with correct types', async () => {
    const app = createApiApp('/api')
    
    // Test form submission endpoint
    const postReq = new Request('https://example.com/api/test/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ test: 'data' })
    })
    const postRes = await app.request(postReq)
    expect(postRes.status).toBe(200)
    
    const postData = await postRes.json() as FormSubmissionResponse
    expect(postData.message).toBe('Form submitted successfully!')
  })
})