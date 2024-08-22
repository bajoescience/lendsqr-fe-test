import viewIcon from "../img/viewDetails.png";
import friendIcon from "../img/delete-friend.png";
import activateIcon from "../img/active-user.png";
import { changeUserstatus, stylePositioning } from "../helper";

import { TStatus, TUserObj } from "../types";
import { useEffect } from "react";

import "../styles/StatusCard.css";
import { useNavigate } from "react-router-dom";

// Content of the component to be rendered
const viewArr = [
  {
    src: viewIcon,
    title: "View Details",
  },
  {
    src: friendIcon,
    title: "Blacklist User",
  },
  {
    src: activateIcon,
    title: "Activate User",
  },
] as const;

const StatusChange = ({
  updateChangedUser,
  anchor_id,
  setanchor_id,
}: {
  anchor_id: string | null;
  setanchor_id: React.Dispatch<React.SetStateAction<string | null>>;
  updateChangedUser: (changedUser: TUserObj) => null | undefined;
}) => {
  const navigate = useNavigate();

  // Hide the status card when not in use
  useEffect(() => {
    if (!anchor_id) {
      (document.getElementById("statusCard") as HTMLDivElement).style.left =
        stylePositioning.left;
    }
  }, [anchor_id]);

  // These are the event handler func for each option
  // Redirect the client to the Full user page
  const handleViewDetails = () => {
    // Go to the next page
    return (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      navigate(`/dashboard/userdetails/${anchor_id}`);

      // Close the card
      setanchor_id(null);
    };
  };

  // Change the user status
  const handleUserChange = (status: TStatus) => {
    return async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      // Fetch the user and change the status
      if (!anchor_id) return;

      const userObj = await changeUserstatus(status, anchor_id);

      // save the updated user
      updateChangedUser(userObj);

      // Close the card
      setanchor_id(null);
    };
  };

  return (
    <div className="status-change-con" id="statusCard">
      {viewArr.map((view) => (
        <div
          key={view.title}
          onClick={(() => {
            if (view.title === "View Details") {
              return handleViewDetails();
            } else if (view.title === "Blacklist User") {
              return handleUserChange("Blacklisted");
            } else {
              return handleUserChange("Active");
            }
          })()}
        >
          <img src={view.src} alt={view.title} />
          <span>{view.title}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusChange;
