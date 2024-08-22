// Define the Global custom types Here
export type Ttier = 1 | 2 | 3;

export type TUser = {
  email: string;
  password: string;
};

export type TContext = {
  user: TUser | null;
  setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
};

export type TSidebarLink = {
  name: string;
  icon: string;
  active?: boolean;
  url?: string;
};

export type TDisplayStat = {
  icon: string;
  name: string;
  count: number;
};

export type TStatus = "Active" | "Inactive" | "Pending" | "Blacklisted" | "";

export type TUserObj = {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  date: string;
  status: TStatus;
};

export type TUserComplete = TUserObj & {
  guid: string;
  tier: Ttier;
  name: string;
  cash: string;
  age: number;
  acctNo: string;
  gender: string;
  generalDetails: [
    {
      title: "string";
      values: [
        {
          title: string;
          value: string;
        }
      ];
    }
  ];
};

// Define specific values for the paginate type
export type TPaginate = 10 | 20 | 30 | 50 | 100;

export type TPaginateObj = {
  page: number;
  diff: TPaginate;
};

// This is the list of headers
export type tHead =
  | "status"
  | "organization"
  | "username"
  | "email"
  | "phone number"
  | "date joined";
