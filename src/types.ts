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

export type TStatus = 'Active' | 'Inactive' | 'Pending' | 'Blacklisted'

export type TUserObj = {
  id?: string,
  organization: string,
  username: string,
  email: string,
  phone: string,
  date: string,
  status: TStatus,
}

// Define specific values for the paginate type
export type TPaginate = 10 | 20 | 30 | 50 | 100