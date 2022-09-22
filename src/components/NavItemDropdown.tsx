import { useState } from "react";
import { cn } from "../utils/classesNames";

type Item = {
  icon?: string;
  name: string;
};

type Props = {
  name: string;
  items: Item[];
};

export const NavItemDropdown = ({ name, items }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        className="nav-item item-dropdown"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {name}{" "}
        <img
          src="/images/icon-arrow-up.svg"
          className={cn(
            showDropdown ? "rotate-0" : "rotate-180",
            "w-3 h-2 ml-1 transition-transform duration-300"
          )}
        />
      </button>
      <div
        onMouseLeave={() => setShowDropdown(false)}
        className={cn(
          showDropdown ? "block" : "hidden",
          "animate-enter-dropdown absolute right-0 z-10 mt-4 origin-top-right rounded-md bg-almost-white shadow-lg focus:outline-none"
        )}
      >
        <div className="p-1">
          {items.map((item, index) => {
            return (
              <a
                href="#"
                key={index}
                className="flex items-center justify-start px-4 py-2 text-medium-gray hover:text-almost-black transition-colors duration-300"
              >
                {item.icon && (
                  <div className="w-4 h-4 mr-4">
                    <img src={item.icon} className="max-w-full block" />
                  </div>
                )}
                <span className="flex-shrink-0 flex-grow">{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
