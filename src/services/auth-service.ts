import jwtDecode from "jwt-decode"
import Router from 'next/router'
import { redirectToLogin } from './redirect-service'

export const TOKEN_STORAGE_KEY = 'myApp.authToken'

export type DecodedToken = {
  readonly email: string
  readonly exp: number
}

export class AuthService {
  decodedToken?: DecodedToken
  token?: string

  constructor() {
    try {
      this.token = localStorage.getItem(TOKEN_STORAGE_KEY) || undefined;
      if (this.token) {
        this.decodedToken = jwtDecode(this.token)
      }
    } catch (e) {}
  }

  get authorizationString() {
    return `Bearer ${this.token}`
  }

  get expiresAt(): Date {
    if (!this.decodedToken) {
      return new Date(0)
    }
    return new Date(this.decodedToken.exp * 1000)
  }

  get isExpired(): boolean {
    return new Date() > this.expiresAt
  }

  get isValid(): boolean {
    return !this.isExpired
  }

  async storeToken(token: string) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token)
    this.token = token
    this.decodedToken = jwtDecode(token)
  }

  async logout() {
    localStorage.removeItem(TOKEN_STORAGE_KEY)
    await redirectToLogin()
  }
}
const authService = new AuthService();
export default authService;
