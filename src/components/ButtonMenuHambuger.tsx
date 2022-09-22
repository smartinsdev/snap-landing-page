import { useContext } from "react";
import { OpenMenuContext } from "../contexts/OpenMenuContext";

import { cn } from "../utils/classesNames";

export const ButtonMenuHamburger = () => {
  const context = useContext(OpenMenuContext);
  return (
    <button
      className="z-30 flex flex-col h-8 w-8 justify-center items-center group md:hidden"
      onClick={context?.toogleMenu}
    >
      <div
        className={cn(
          "menu-hamburger-line transition ease transform duration-300",
          context?.isOpen
            ? "rotate-45 translate-y-1 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        )}
      />
      <div
        className={cn(
          "menu-hamburger-line transition ease transform duration-300",
          context?.isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        )}
      />
      <div
        className={cn(
          "menu-hamburger-line transition ease transform duration-300",
          context?.isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        )}
      />
    </button>
  );
};
