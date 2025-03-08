import { app } from './route'

// 各APIエンドポイントの詳細テストは個別のテストファイルに移動しています
// routes/test-form.test.ts などを参照してください

describe('API Routes', () => {
  describe('GET /api/hello', () => {
    it('should return hello message', async () => {
      const res = await app.request('/api/hello?name=test');
      expect(res.status).toBe(200)
      const data = await res.json()
      expect(data).toEqual({ message: 'Hello! test' })
    })
  })

  describe('API Routing', () => {
    it('should correctly route to mounted endpoints', async () => {
      // 統合テスト - 適切なエンドポイントにルーティングされるか確認
      const res = await app.request('/api/test/form')
      expect(res.status).toBe(200)
      // 詳細テストはroutes/test-form.test.tsに移動済み
    })
  })
})