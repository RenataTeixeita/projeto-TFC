export interface LoginInput {
  email: string,
  password: string,
}

export interface Token {
  token: string,
}

export interface User {
  id: number,
  username: string,
  role: string,
  email: string,
}

export interface LoginOutput {
  user: User,
  token: Token,
}
