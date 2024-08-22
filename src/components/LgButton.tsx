import { ComponentPropsWithoutRef } from "react";
import { changeUserstatus } from "../helper";
import { TStatus } from "../types";

type TButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  userId: string | undefined;
  status: TStatus;
};

const LgButton = ({ children, color, status, userId }: TButtonProps) => {
  const style = {
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    color,
    border: `1px solid ${color}`,
    cursor: "pointer",
    margin: "0 10px",
    fontWeight: 600,
    fontSize: "0.875",
    letterSpacing: "0.05rem",
  };

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // Change user status
    await changeUserstatus(status, userId as string);
  };

  return (
    <>
      <button style={style} onClick={handleClick}>
        {(children as string).toUpperCase()} USER
      </button>
    </>
  );
};

export default LgButton;
