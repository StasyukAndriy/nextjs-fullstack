import clsx from "clsx";
import { FC } from "react";
import { Child_Class } from "@/types/props";;
const GlassPane:FC<Child_Class> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;