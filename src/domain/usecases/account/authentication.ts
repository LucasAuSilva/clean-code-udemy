import { AuthenticationModel } from '@/domain/models/authentication'

export type AuthenticationDto = {
  email: string
  password: string
}

export interface Authentication {
  auth: (authentication: AuthenticationDto) => Promise<AuthenticationModel>
}
