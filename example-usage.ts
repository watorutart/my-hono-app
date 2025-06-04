// Example of how to use this module as a submodule with type definitions

import { createApiApp, HelloResponse, FormListResponse, FormSubmissionResponse, FormField } from './index'

// Example 1: Creating a standalone API app
const standaloneApp = createApiApp()

// Example 2: Creating an API app with a base path
const apiAppWithBasePath = createApiApp('/v1/api')

// Example 3: Using type definitions in your own functions
function processHelloResponse(response: HelloResponse): string {
  return `Processed: ${response.message}`
}

function processFormData(forms: FormListResponse): FormField[] {
  return forms.filter(form => form.formType === 'text')
}

// Example 4: Type-safe API client functions
async function callHelloApi(baseUrl: string): Promise<HelloResponse> {
  const response = await fetch(`${baseUrl}/hello`)
  return await response.json() as HelloResponse
}

async function callFormListApi(baseUrl: string): Promise<FormListResponse> {
  const response = await fetch(`${baseUrl}/test/form`)
  return await response.json() as FormListResponse
}

export {
  standaloneApp,
  apiAppWithBasePath,
  processHelloResponse,
  processFormData,
  callHelloApi,
  callFormListApi
}