import testFormRouter from './test-form'

describe('/test/form API', () => {
  describe('GET', () => {
    it('should return form configuration', async () => {
      const res = await testFormRouter.request('/')
      expect(res.status).toBe(200)

      const data = await res.json()
      expect(Array.isArray(data)).toBe(true)
      expect(data.length).toBe(2)
      expect(data[0]).toHaveProperty('formKey')
      expect(data[0]).toHaveProperty('formType')
    })
  })

  describe('POST', () => {
    it('should handle form submission', async () => {
      const res = await testFormRouter.request('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          testForm1: 'テストデータ',
          testForm2: 'オプション1'
        })
      })

      expect(res.status).toBe(200)
      const data = await res.json()
      expect(data).toHaveProperty('message')
    })
  })
})