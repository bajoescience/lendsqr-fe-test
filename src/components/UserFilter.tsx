import { tHead, TStatus, TUserObj } from "../types";
import { stylePositioning } from "../helper";

import "../styles/Filter.css";
import { useEffect } from "react";

type TUserFilter = {
  setFilterSchema: React.Dispatch<React.SetStateAction<Partial<TUserObj>>>;
  filterSchema: Partial<TUserObj>;
  filterCon: tHead | "";
  setFilterCon: React.Dispatch<React.SetStateAction<"" | tHead>>;
};

const UserFilter = ({
  setFilterSchema,
  filterSchema,
  filterCon,
  setFilterCon,
}: TUserFilter) => {
  // Hide the filter form when not in use
  useEffect(() => {
    if (filterCon === "") {
      (document.getElementById("filter") as HTMLDivElement).style.left =
        stylePositioning.left;
    }
  }, [filterCon]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const organization = (data.get("organization") as string) || "";
    const username = (data.get("username") as string) || "";
    const email = (data.get("email") as string) || "";
    const date = (data.get("date") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const status = (data.get("status") as TStatus) || "";

    const filterSchema: Partial<TUserObj> = {
      organization,
      username,
      email,
      date,
      phone,
      status,
    };

    // Sets the filter schema to the filter schema given by the form
    setFilterSchema(filterSchema);

    // Close the form
    setFilterCon("");
  };

  return (
    <div className="user-filter-form-con" id="filter" style={stylePositioning}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-inpt">
          <label htmlFor="organization">Organization</label>
          <select defaultValue={""} name="organization" id="organization">
            <option value="" disabled>
              Select
            </option>
            <option value="lendsqr">lendsqr</option>
          </select>
        </div>
        <div className="form-inpt">
          <label htmlFor="username">Username</label>
          <input name="username" id="username" placeholder="User" />
        </div>
        <div className="form-inpt">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" placeholder="Email" />
        </div>
        <div className="form-inpt">
          <label htmlFor="date">Date</label>
          <input name="date" type="date" id="date" placeholder="Date" />
        </div>
        <div className="form-inpt">
          <label htmlFor="phone">Phone Number</label>
          <input
            name="phone"
            type="phone"
            id="phone"
            placeholder="Phone Number"
          />
        </div>
        <div className="form-inpt">
          <label htmlFor="status">Status</label>
          <select name="status" defaultValue={""} id="status">
            <option value="" disabled>
              Select
            </option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
        </div>
        <div className="form-butt">
          <button type="reset" className="reset">
            Reset
          </button>
          <button type="submit" className="submit">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserFilter;
