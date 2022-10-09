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

export const AccordinItem = (props: Props) => {
  const [openAccordin, setOpenAccordion] = useState(false);
  return (
    <>
      <button
        className="nav-item flex items-center"
        onClick={() => setOpenAccordion(!openAccordin)}
      >
        {props.name}
        <img
          src="/images/icon-arrow-up.svg"
          className={cn(
            openAccordin ? "rotate-0" : "rotate-180",
            "w-3 h-2 ml-1 transition-transform duration-300"
          )}
        />
      </button>
      <div
        className={cn(
          openAccordin ? "block" : "hidden",
          "p-2 overflow-hidden animate-enter-accordion-menu"
        )}
      >
        {props.items.map((item, index) => {
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
    </>
  );
};
