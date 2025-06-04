import { processHelloResponse, processFormData } from './example-usage'
import type { HelloResponse, FormListResponse } from './index'

describe('Type Definition Usage Examples', () => {
  it('should process hello response with correct typing', () => {
    const response: HelloResponse = { message: 'Test message' }
    const result = processHelloResponse(response)
    expect(result).toBe('Processed: Test message')
  })

  it('should filter form data with correct typing', () => {
    const forms: FormListResponse = [
      { formKey: 'field1', formType: 'text' },
      { formKey: 'field2', formType: 'combobox' },
      { formKey: 'field3', formType: 'text' }
    ]
    const result = processFormData(forms)
    expect(result).toHaveLength(2)
    expect(result.every(form => form.formType === 'text')).toBe(true)
  })
})