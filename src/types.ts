// Define the Global custom types Here
export type TUser = {
  email: string,
  password: string
}

export type TContext = {
  user: TUser | null,
  setUser: React.Dispatch<React.SetStateAction<TUser | null>>
}