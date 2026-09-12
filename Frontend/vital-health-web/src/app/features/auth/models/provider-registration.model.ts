export interface AccountDetails {
  fullName: string;
  email: string;
  password: string;
}

export interface ProfessionalDetails {
  npiNumber: string;
  deaNumber?: string;
  practiceName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

export type VerificationMethod = 'npi' | 'documents' | 'email';

export interface ProviderRegistration {
  account: AccountDetails | null;
  professional: ProfessionalDetails | null;
  verificationMethod: VerificationMethod | null;
}
