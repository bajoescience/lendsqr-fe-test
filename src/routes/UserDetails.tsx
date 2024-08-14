import { useLoaderData, useNavigate } from "react-router-dom";

import LgButton from "../components/LgButton";
import { TUserObj } from "../types";

import backArr from "../img/back arrow.png";
import userAvatar from "../img/user-avatar.png";
import "../styles/UserDetails.css";
import Tier from "../components/Tier";

const UserDetails = () => {
  const user = useLoaderData() as TUserObj;
  const navigate = useNavigate();

  const handleBackPage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    navigate(-1);
  };

  // Render star image for user tier
  const tier = () => {};

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
        <section className="sect-3">
          <div className="user-con">
            <figure className="fig-1">
              <img src={userAvatar} alt="user avatar" height={40} width={40} />
            </figure>
            <div className="user-display">
              <h2 className="bold">{"user.name"}</h2>
              <p>LSQFf587g90</p>
            </div>
            <div className="vert"></div>
            <div className="user-display">
              <h4 className="bold">User's Tier</h4>
              <p>
                <Tier tier={1} />
              </p>
            </div>
            <div className="vert"></div>
            <div className="user-display">
              <h2 className="bold">{`$user.cash`}</h2>
              <p>{`user.acctNo/Providus Bank`}</p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default UserDetails;
