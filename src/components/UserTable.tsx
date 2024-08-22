import {
  TUserObj,
  TPaginate,
  TPaginateObj,
  tHead,
  TUserComplete,
} from "../types";

import { changeUserType, paginateArray } from "../helper";

import { useState, useEffect } from "react";

// Get the pagination images
import leftNavIcon from "../img/left-nav.png";
import rightNavIcon from "../img/right-nav.png";
import UserTableHead from "./UserTableHead";
import UserTableBody from "./UserTableBody";

import { lazy, Suspense } from "react";
import { getUserCount, getUsers } from "../services/user";
const UserFilter = lazy(() => import("./UserFilter"));
const StatusChange = lazy(() => import("./StatusChange"));

const UserTable = ({
  filteredUsers,
  setFilteredUsers,
}: {
  filteredUsers: TUserObj[] | null;
  setFilteredUsers: React.Dispatch<React.SetStateAction<TUserObj[] | null>>;
}) => {
  // This object is the schema by which users are filtered
  const [filterSchema, setFilterSchema] = useState<Partial<TUserObj>>({
    organization: "",
    username: "",
    email: "",
    phone: "",
    date: "",
    status: "",
  });

  // page?: number, diff?: number, resource?: TUserObj

  // diff: How many users is displayed per page.
  // page: This is the page number for the users display.
  // pageCount: This is the total amount of pages which is related to the number of users.
  const [paginate, setPaginate] = useState<TPaginateObj>({
    diff: 10,
    page: 0,
  });

  const [userCount, setUserCount] = useState(0);

  // Store the user-id that the status change component is anchored to
  const [anchor_id, setanchor_id] = useState<string | null>(null);

  // Store the name of the table header that the filter component is currently anchored to.
  const [filterCon, setFilterCon] = useState<tHead | "">("");

  // Always filter the users to be displayed
  // by the filter schema
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const rawUsers: TUserComplete[] = await getUsers(
          paginate,
          filterSchema
        );

        // Fetch users and count length of active and total users
        const fetchedUsers = rawUsers.map(changeUserType);

        if (!fetchedUsers || fetchedUsers.length === 0) {
          return;
        }

        setFilteredUsers(fetchedUsers);
      } catch (error) {
        setFilteredUsers(null);
      }
    };

    fetchUsers();
  }, [filterSchema, setFilteredUsers, paginate]);

  useEffect(() => {
    // Make sure the users are filtered
    if (!filteredUsers) return;

    // Get total number of filtered users
    // from database
    const getTotalCount = async () => {
      try {
        const totalCount: number = await getUserCount(filterSchema);

        // Store the total number of filtered users in state
        setUserCount(totalCount);
      } catch (error) {
        setUserCount(0);
      }
    };

    getTotalCount();
  }, [filteredUsers, filterSchema]);

  // Change the users array to reflect updated user
  const updateChangedUser = (changedUser: TUserObj): null | undefined => {
    if (!filteredUsers) return;

    setFilteredUsers(() =>
      filteredUsers.map((user) =>
        user.id !== changedUser.id ? user : changedUser
      )
    );
  };

  // When the select option changes
  // We set the page number back to 1
  const handlePaginateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaginate({
      ...paginate,
      page: 0,
      diff: e.target.value as unknown as TPaginate,
    });
  };

  // Handle the change in page navigation/number
  // nav_type can only have two values
  const handlePageChange = (nav_type: "prev" | "next") => {
    const pageCount = Math.ceil(userCount / paginate.diff);
    const { page } = paginate;

    // Previous button clicked
    if (nav_type === "prev") {
      return (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (page === 0) {
          return;
        }
        setPaginate({ ...paginate, page: page - 1 });
      };
    } else {
      // Next button clicked
      return (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // If the page number is equal to the page count
        // Do not add any more
        if (page === pageCount) {
          return;
        }
        setPaginate({ ...paginate, page: page + 1 });
      };
    }
  };

  // Render what the pagination display is like
  const paginationDisplay = () => {
    const pageCount = Math.ceil(userCount / paginate.diff);
    const page = paginate.page + 1;

    const displayArr = Array.from(Array(pageCount).keys()).map((i) => i + 1);
    return (
      <>
        {displayArr.map((number) => {
          // As the first part of the boolean check
          // If 1st page, we render two incremental values e.g 1, 2, 3
          // If not first page, we render like this {number - 1}, {number}, {number + 1}
          const firstValues =
            page === 1
              ? number > page + 2
              : number > page + 1 || number < page - 1;

          if (!(pageCount && firstValues && number < pageCount - 1)) {
            return (
              <span
                key={number}
                onClick={() => {
                  setPaginate({ ...paginate, page: number - 1 });
                }}
                className={
                  number === page ? "page-span pag-active" : "page-span"
                }
              >
                {number}
              </span>
            );
          }

          if (number === page + 3) {
            return <span key={number}>...</span>;
          }

          return null;
        })}
      </>
    );
  };

  // Display the appropiate number of users
  // in the select bar of the pagination
  const seclectDisplay = () => {
    if (!filteredUsers) {
      return <option value={0}>0</option>;

      // If users is less than 10, display only that
    } else if (userCount < 10) {
      const length = userCount;
      return <option value={length}>{length}</option>;

      // If users is greater than 10, display as a full select
    } else {
      return paginateArray.map((opt) => {
        // Do not let the select option
        // display a value greater than the length of users
        if (opt > userCount) {
          return null;
        }
        return (
          <option key={opt} value={opt}>
            {opt}
          </option>
        );
      });
    }
  };

  return (
    <>
      <div className="table-con">
        <table>
          {/* Render the head of the user */}
          <UserTableHead filterCon={filterCon} setFilterCon={setFilterCon} />

          {/* Render each user as a row */}
          <UserTableBody
            anchor_id={anchor_id}
            setanchor_id={setanchor_id}
            users={filteredUsers}
          />
        </table>
      </div>

      <div className="paginate-con">
        <div>
          Showing
          <span className="select-con">
            <select value={paginate.diff} onChange={handlePaginateSelect}>
              {seclectDisplay()}
            </select>
          </span>
          out of {!filteredUsers ? 0 : userCount}
        </div>
        <nav>
          <button className="pag-nav-butt" onClick={handlePageChange("prev")}>
            <img src={leftNavIcon} alt="left nav icon" />
          </button>
          {paginationDisplay()}
          <button className="pag-nav-butt" onClick={handlePageChange("next")}>
            <img src={rightNavIcon} alt="right nav icon" />
          </button>
        </nav>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {/* Filter form that is toggled */}
        <UserFilter
          filterSchema={filterSchema}
          setFilterSchema={setFilterSchema}
          filterCon={filterCon}
          setFilterCon={setFilterCon}
        />

        {/* This is the status Change card */}
        <StatusChange
          anchor_id={anchor_id}
          setanchor_id={setanchor_id}
          updateChangedUser={updateChangedUser}
        />
      </Suspense>
    </>
  );
};

export default UserTable;
