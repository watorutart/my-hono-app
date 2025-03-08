import { GET, POST } from './route';

// Next.jsのRequest用のモック作成
const createMockRequest = (path: string, method = 'GET', body?: any) => {
  const url = new URL(`https://example.com${path}`);
  return new Request(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

describe('API Routes', () => {
  it('should return correct message for /api/hello route', async () => {
    const req = createMockRequest('/api/hello');
    const res = await GET(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toEqual({ message: 'Hello from Hono!' });
  });

  it('should return form data for /api/test/form GET request', async () => {
    const req = createMockRequest('/api/test/form');
    const res = await GET(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toEqual([
      {
        formKey: 'testForm1',
        formType: 'text',
      },
      {
        formKey: 'testForm2',
        formType: 'combobox',
      }
    ]);
  });

  it('should handle form submission for /api/test/form POST request', async () => {
    const req = createMockRequest('/api/test/form', 'POST');
    const res = await POST(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toEqual({ message: 'Form submitted successfully!' });
  });
});