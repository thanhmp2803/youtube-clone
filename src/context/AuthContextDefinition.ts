import { createContext } from 'react'

export interface IUser {
  id: string
  name: string
  email: string
  authToken?: string
}

export interface IAuthContext {
  user: IUser | null
  setUser: (user: IUser | null) => void
  login: (user: IUser) => void
  logout: () => void
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined)
