import { TUserComplete } from "../types";

import "../styles/UserInfo.css";

const UserInfoDict = ({
  info,
  user,
}: {
  info: {
    title: "string";
    values: [
      {
        title: string;
        value: string;
      }
    ];
  };
  user: TUserComplete;
}) => {
  return (
    <div className="info-box">
      <h4>{info.title}</h4>
      <div className="info-group-con">
        {info.values.map((group) => {
          let title = group.title.toLocaleUpperCase();
          let value = group.value;

          // Correct the name, email, gender
          if ((info.title as string) === "Personal Information") {
            if (group.title === "FULL NAME") {
              value = user.name;
            }
            if (group.title === "Email Address") {
              value = user.email;
            }
            if (group.title === "Gender") {
              value = user.gender;
            }
          }

          // Make sure the income is displayed in naira
          if (group.title === "Monthly income") {
            const incomeLimits = value.split("-");
            value = `₦${incomeLimits[0]} - ₦${incomeLimits[1]}`;
          }

          // Make sure the loan value is displayed in naira
          if (group.title === "loan repayment") {
            value = `₦${group.value}`;
          }

          // Correct the phone numbers that are not corrected
          if (
            group.title === "Phone Number" &&
            (info.title as string) !== "Personal Information"
          ) {
            value = `+234 ${group.value}`;
          }
          return (
            <div className="info-group" key={group.title}>
              <p className="key">{title}</p>
              <p className="value">{value}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

const UserInfo = ({ user }: { user: TUserComplete }) => {
  return (
    <>
      {user.generalDetails.map((info) => {
        return <UserInfoDict info={info} user={user} key={info.title} />;
      })}
    </>
  );
};

export default UserInfo;
