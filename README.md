# My Hono App

A Hono-based API application that can be used as a Next.js app or as a submodule in other projects.

## Usage as a Next.js App

```bash
npm install
npm run dev
```

## Usage as a Submodule

This repository can be used as a Git submodule to share API logic and type definitions across projects.

### Adding as a Submodule

```bash
git submodule add https://github.com/watorutart/my-hono-app.git lib/my-hono-app
```

### Using the API and Types

```typescript
import { createApiApp, HelloResponse, FormListResponse, FormField } from './lib/my-hono-app'

// Create a standalone API app
const app = createApiApp()

// Create an API app with base path
const apiApp = createApiApp('/api/v1')

// Use type definitions
function processHelloResponse(response: HelloResponse): string {
  return `Processed: ${response.message}`
}

function filterTextFields(forms: FormListResponse): FormField[] {
  return forms.filter(form => form.formType === 'text')
}
```

### Available Exports

#### Functions
- `createApiApp(basePath?: string)`: Creates a new Hono app instance with the API routes

#### Types
- `HelloResponse`: Response type for the `/hello` endpoint
- `FormField`: Individual form field type
- `FormListResponse`: Response type for the `/test/form` GET endpoint
- `FormSubmissionResponse`: Response type for the `/test/form` POST endpoint
- `FormSubmissionRequest`: Request type for form submissions

### API Endpoints

- `GET /hello` - Returns a hello message
- `GET /test/form` - Returns a list of form fields
- `POST /test/form` - Handles form submission

## Development

```bash
npm install
npm run dev    # Start development server
npm run build  # Build for production
npm run test   # Run tests
npm run lint   # Run linter
```
