import {
  TSidebarLink,
  TPaginate,
  TUserObj,
  TDisplayStat,
  TStatus,
} from "./types";

// These are the Sidebar imports
import userIcon from "./img/user.png";
import guarantorsIcon from "./img/Guarantors.png";
import loansIcon from "./img/Loans.png";
import decisionModelsIcon from "./img/Decision Models.png";
import savingsIcon from "./img/Savings.png";
import loanRequestsIcon from "./img/Loan Requests.png";
import whitelistIcon from "./img/Whitelist.png";
import karmaIcon from "./img/Karma.png";

import organizationIcon from "./img/Organization.png";
import loanproductsIcon from "./img/Loan Products.png";
import savingsProductsIcon from "./img/Savings Products.png";
import feesAndChargesIcon from "./img/Fees and Charges.png";
import servicesIcon from "./img/Services.png";
import serviceAccountIcon from "./img/Service Account.png";
import settlementsIcon from "./img/Settlements.png";
import reportsIcon from "./img/Reports.png";

import prefrencesIcon from "./img/Prefences.png";
import feesAndPricing from "./img/Fees and Pricing.png";
import auditLogsIcon from "./img/Audit Logs.png";

import usersIcon from "./img/USERS.png";
import activeusersIcon from "./img/ACTIVE USERS.png";
import loanusersIcon from "./img/USERS WITH LOANS.png";
import savingusersIcon from "./img/USERS WITH SAVINGS.png";
import { getUser, updateUser } from "./services/user";

// Make an element disappear
export const stylePositioning = {
  left: "-3000px",
};

// Change a user's status
export const changeUserstatus = async (status: TStatus, userID: string) => {
  const userObj = (await getUser(userID)) as TUserObj;

  const changedUser: TUserObj = {
    ...userObj,
    status: status,
  };
  await updateUser(userID, changedUser);
  return changedUser;
};

// Create a function that takes the users to be displayed
// and filters them using the schema
// submitted by the filter form
export const filterUsers = (
  users: TUserObj[] | null,
  filterSchema: TUserObj
): TUserObj[] | null => {
  const filteredUsers = users?.filter((user) => {
    let bool = true;

    Object.keys(user).forEach((key) => {
      const userProperty = user[key as keyof TUserObj];
      const match = filterSchema[key as keyof TUserObj] as string;

      if (!userProperty?.includes(match)) {
        bool = false;
      }
    });
    return bool;
  });

  if (!filteredUsers || filteredUsers.length === 0) {
    return null;
  }

  return filteredUsers;
};

export const validateEmail = (email: string): boolean => {
  const re = /^\S+@\S+\.\S+$/;
  return re.test(email);
};

export const getNameFromEmail = (
  email: string | undefined
): string | undefined => {
  return email?.substring(0, email?.indexOf("@"));
};

export const nameToUrl = (name: string) =>
  name.toLocaleLowerCase().replaceAll(" ", "-");

// These are the table headers for the users page
export const tHeaders = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
] as const;

// List of possible pagination values for users table
export const paginateArray: TPaginate[] = [10, 20, 30, 50, 100];

// Function that divides the users array by pagination
export const paginateFunc = ({
  page,
  diff,
  users,
}: {
  page: number;
  diff: TPaginate;
  users: TUserObj[] | null;
}): TUserObj[] | null => {
  // Get the start and end of the paginate string
  const start = 0 + (page - 1) * diff;
  const end = diff * page;
  const userSlice = users?.slice(start, end);
  if (!userSlice) {
    return null;
  }
  return userSlice;
};

// Display the user stats for the user page box
export const displayStats: TDisplayStat[] = [
  {
    name: "USERS",
    icon: usersIcon,
    count: 0,
  },
  {
    name: "ACTIVE USERS",
    count: 0,
    icon: activeusersIcon,
  },
  {
    name: "USERS WITH LOANS",
    count: 12453,
    icon: loanusersIcon,
  },
  {
    name: "USERS WITH SAVINGS",
    count: 102453,
    icon: savingusersIcon,
  },
];

// Store each section of sidebar as a type array in sidebarsection
type TSidebarArray = {
  title: string;
  children: TSidebarLink[];
};

// Render the sidebar links dynamically using this read-only array
export const sidebarSection: TSidebarArray[] = [
  {
    title: "customers",
    children: [
      {
        name: "Users",
        icon: userIcon,
        active: true,
        url: "users",
      },
      {
        name: "Guarantors",
        icon: guarantorsIcon,
        active: false,
        url: "guarantors",
      },
      {
        name: "Loans",
        icon: loansIcon,
        active: false,
        url: "loans",
      },
      {
        name: "Decision Models",
        icon: decisionModelsIcon,
        active: false,
        url: "decision-models",
      },
      {
        name: "Savings",
        icon: savingsIcon,
        active: false,
        url: "savings",
      },
      {
        name: "Loan Requests",
        icon: loanRequestsIcon,
        active: false,
        url: "loan-requests",
      },
      {
        name: "Whitelist",
        icon: whitelistIcon,
        active: false,
        url: "whitelist",
      },
      {
        name: "Karma",
        icon: karmaIcon,
        active: false,
        url: "karma",
      },
    ],
  },
  {
    title: "businesses",
    children: [
      {
        name: "Organization",
        icon: organizationIcon,
      },
      {
        name: "Loan Products",
        icon: loanproductsIcon,
      },
      {
        name: "Saving Products",
        icon: savingsProductsIcon,
      },
      {
        name: "Fees and Charges",
        icon: feesAndChargesIcon,
      },
      {
        name: "Services",
        icon: servicesIcon,
      },
      {
        name: "Service Account",
        icon: serviceAccountIcon,
      },
      {
        name: "Settlements",
        icon: settlementsIcon,
      },
      {
        name: "Reports",
        icon: reportsIcon,
      },
    ],
  },
  {
    title: "settings",
    children: [
      {
        name: "Prefrences",
        icon: prefrencesIcon,
      },
      {
        name: "Fees And Pricing",
        icon: feesAndPricing,
      },
      {
        name: "Audit Logs",
        icon: auditLogsIcon,
      },
    ],
  },
];
