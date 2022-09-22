import React, { Dispatch, SetStateAction } from "react";

type OpenMenuProps = {
  isOpen: boolean;
  toogleMenu: () => void;
};

export const OpenMenuContext = React.createContext<OpenMenuProps | null>(null);
