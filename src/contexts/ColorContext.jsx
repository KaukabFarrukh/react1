import React, { createContext, useState } from "react";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [navbarColor, setNavbarColor] = useState("#ffffff");

  return (
    <ColorContext.Provider value={{ navbarColor, setNavbarColor }}>
      {children}
    </ColorContext.Provider>
  );
};
