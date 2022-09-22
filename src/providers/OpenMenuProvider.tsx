import React, { useState } from "react";
import { OpenMenuContext } from "../contexts/OpenMenuContext";

type Props = {
  children: React.ReactNode;
};

export const OpenMenuProvider = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => setIsOpen(!isOpen);
  return (
    <OpenMenuContext.Provider value={{ isOpen, toogleMenu }}>
      {props.children}
    </OpenMenuContext.Provider>
  );
};
