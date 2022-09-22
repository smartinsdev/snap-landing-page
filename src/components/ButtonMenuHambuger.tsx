import { MouseEventHandler } from "react";

import { cn } from "../utils/classesNames";

type Props = {
  isOpen: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

export const ButtonMenuHamburger = ({ isOpen, handleClick }: Props) => {
  return (
    <button
      className="z-30 flex flex-col h-8 w-8 justify-center items-center group md:hidden"
      onClick={handleClick}
    >
      <div
        className={cn(
          "menu-hamburger-line transition ease transform duration-300",
          isOpen
            ? "rotate-45 translate-y-1 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        )}
      />
      <div
        className={cn(
          "menu-hamburger-line transition ease transform duration-300",
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        )}
      />
      <div
        className={cn(
          "menu-hamburger-line transition ease transform duration-300",
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        )}
      />
    </button>
  );
};
