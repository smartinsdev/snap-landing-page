import { useContext } from "react";
import { OpenMenuContext } from "../contexts/OpenMenuContext";
import { cn } from "../utils/classesNames";

type Props = {
  children: React.ReactNode;
};

export const SideBar = (props: Props) => {
  const context = useContext(OpenMenuContext);
  return (
    <>
      <div
        className={cn(
          context?.isOpen
            ? "translate-x-0 visible"
            : "translate-x-full invisible",
          "fixed top-0 right-0 transition-all ease-in-out duration-200 z-20 shadow-2xl drop-shadow-2xl bg-almost-white overflow-x-hidden h-full w-1/2 md:hidden"
        )}
      >
        {props.children}
      </div>
    </>
  );
};
