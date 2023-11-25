import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const [footerText, setFooterText] = useState({
    1: "Projekt made by",
    2: "Ksawery",
  });

  const [sectionImg, setSectionImg] = useState({
    1: "./default.png",
    2: "./default.png",
    3: "./default.png",
  });

  const [sectionOrder, setSectionOrder] = useState({
    1: "1",
    2: "2",
    3: "3",
  });
  return (
    <AppContext.Provider
      value={{
        logged,
        setLogged,
        footerText,
        setFooterText,
        sectionImg,
        setSectionImg,
        sectionOrder,
        setSectionOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
