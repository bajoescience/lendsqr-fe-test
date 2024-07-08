// Define the Global custom types Here
export type TUser = {
  email: string,
  password: string
}

export type TContext = {
  user: TUser | null,
  setUser: React.Dispatch<React.SetStateAction<TUser | null>>
}

export type TSidebarLink = {
  name: string,
  icon: string,
  active?: boolean,
  url?: string
}

export type TDisplayStat = {
  icon: string,
  name: string,
  count: number | null
}

export type status = 'Active' | 'Inactive' | 'Pending' | 'Blacklisted'

export type user = {
  organization: string,
  username: string,
  email: string,
  phone: string,
  date: Date,
  status: status,
}