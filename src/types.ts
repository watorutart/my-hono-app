// API Response Types
export interface HelloResponse {
  message: string;
}

export interface FormField {
  formKey: string;
  formType: 'text' | 'combobox' | string;
}

export interface FormListResponse extends Array<FormField> {}

export interface FormSubmissionResponse {
  message: string;
}

// API Request Types
export interface FormSubmissionRequest {
  [key: string]: any;
}