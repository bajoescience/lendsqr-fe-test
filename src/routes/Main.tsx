import { useParams } from "react-router-dom";
import { changeUserType, nameToUrl, sidebarSection } from "../helper";

// import Users from "../components/Users";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { TUserComplete, TUserObj } from "../types";
import { getUsers } from "../services/user";
const Users = lazy(() => import("../components/Users"));
const Error = lazy(() => import("../components/Error"));

// Get all the links from the sidebar section
let allLinks: string[] = [];
sidebarSection.forEach((sect) => {
  const linkName: string[] = sect.children.map((child) =>
    nameToUrl(child.name)
  );
  allLinks = allLinks.concat([...linkName]);
});

const Main = () => {
  // Fetch the current page link from the url
  const { link } = useParams<string>();

  const [users, setUsers] = useState<TUserObj[] | null>(null);

  // Count amount of active users
  const activeUsersCount = useRef(0);

  // Count amount of users
  const totalUsersCount = useRef(0);

  // const activeUsersCount = { count: 0 };

  // Fetch the available users from the database
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const rawUsers = (await getUsers()) as TUserComplete[];

        // Reset all user counters
        activeUsersCount.current = 0;
        totalUsersCount.current = 0;

        // Fetch users and count length of active and total users
        const fetchedUsers = rawUsers.map((user) => {
          totalUsersCount.current++;
          if (user.status === "Active") {
            activeUsersCount.current++;
          }
          return changeUserType(user);
        });

        setUsers(fetchedUsers);
      } catch (error) {
        setUsers(null);
      }
    };
    fetchUsers();
  }, []);

  // If url is the url for users page, render users
  if (link === "users") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Users
          users={users}
          setUsers={setUsers}
          activeUsersCount={activeUsersCount.current}
          totalUsersCount={totalUsersCount.current}
        />
      </Suspense>
    );
  }

  // If not users page, but page exists, we display contruction in progress error
  if (!link || allLinks.includes(link)) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Error linkExists />
      </Suspense>
    );
  }

  // Else we just render not available error
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Error />
      </Suspense>
    </>
  );
};

export default Main;
