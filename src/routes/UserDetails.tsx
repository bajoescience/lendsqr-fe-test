import { useLoaderData, useNavigate } from "react-router-dom";

import backArr from "../img/back arrow.png";
import "../styles/UserDetails.css";
import LgButton from "../components/LgButton";
import { TUserObj } from "../types";
import { useEffect } from "react";

const UserDetails = () => {
  const user = useLoaderData() as TUserObj;
  const navigate = useNavigate();

  const handleBackPage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    navigate(-1);
  };

  return (
    <>
      <article className="user-details">
        <section className="sect-1">
          <button onClick={handleBackPage}>
            <div className="button-con">
              <img src={backArr} alt="back arrow" width={30} height={30} />
              <span>Back To Users</span>
            </div>
          </button>
        </section>
        <section className="sect-2">
          <h2>User Details</h2>
          <div>
            <LgButton
              color="rgba(228, 3, 59, 1)"
              status="Blacklisted"
              userId={user.id}
            >
              blacklist
            </LgButton>
            <LgButton
              color="rgba(57, 205, 204, 1)"
              status="Active"
              userId={user.id}
            >
              activate
            </LgButton>
          </div>
        </section>
      </article>
    </>
  );
};

export default UserDetails;
