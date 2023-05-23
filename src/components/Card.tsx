import clsx from "clsx";
import { FC } from "react";
import { Child_Class } from "@/types/props";
const Card:FC<Child_Class> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;