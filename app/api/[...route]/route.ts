import { handle } from 'hono/vercel'
import { createApiApp } from '../../../src/api'

export const runtime = 'edge'

const app = createApiApp('/api')

export const GET = handle(app)
export const POST = handle(app)
