import { useLoaderData, useNavigate } from "react-router-dom";

import LgButton from "../components/LgButton";
import { Ttier, TUserComplete } from "../types";

import backArr from "../img/back arrow.png";
import userAvatar from "../img/user-avatar.png";
import "../styles/UserDetails.css";
import Tier from "../components/Tier";
import { useState } from "react";
import UserInfo from "../components/UserInfo";

const pages = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
] as const;

const UserDetails = () => {
  const user = useLoaderData() as TUserComplete;
  const navigate = useNavigate();

  const [currentNav, setCurrentNav] = useState<string>(pages[0]);

  const handleBackPage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    navigate(-1);
  };

  const handlePageChange =
    (page: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setCurrentNav(page);
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
          <h1 className="bold">User Details</h1>
          <div className="button-con">
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
        <section className="sect-3">
          <div className="user-con">
            <figure className="fig-1">
              <img src={userAvatar} alt="user avatar" height={40} width={40} />
            </figure>
            <div className="user-display">
              <h2 className="bold">{`${user.name}`}</h2>
              <p>{`${user.guid}`}</p>
            </div>
            <div className="vert"></div>
            <div className="user-display">
              <h4 className="bold">User's Tier</h4>
              <div className="tier nowrap">
                <Tier tier={user.tier as Ttier} />
              </div>
            </div>
            <div className="vert"></div>
            <div className="user-display">
              <h2 className="bold">{`₦${user.cash}`}</h2>
              <p>{`${user.acctNo}/Providus Bank`}</p>
            </div>
          </div>
          <nav>
            {pages.map((page) => {
              return (
                <div
                  // If the page is correct page, set the link to show it is active
                  key={page}
                  className={`${
                    currentNav === page ? "link link-active " : "link"
                  }`}
                  onClick={handlePageChange(page)}
                >
                  <p>{page}</p>
                </div>
              );
            })}
          </nav>
        </section>
        <section className="sect-4">
          {currentNav !== pages[0] ? (
            <h1 className="err">Page Under Construction</h1>
          ) : (
            <UserInfo user={user} />
          )}
        </section>
      </article>
    </>
  );
};

export default UserDetails;
