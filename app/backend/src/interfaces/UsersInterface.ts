export interface LoginInput {
  email: string,
  password: string,
}

export interface Token {
  token: string,
}

export interface UserFullData extends LoginInput {
  id: number,
  username: string,
  role: string,
}

export interface UserI {
  id: number,
  username: string,
  role: string,
  email: string,
}

export interface LoginOutput {
  user: UserI,
  token: Token,
}
