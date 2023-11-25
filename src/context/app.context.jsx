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

  const [sectionText, setSectionText] = useState({
    1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et massa id odio posuere gravida sit amet et augue. Curabitur.",
    2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus turpis vel purus venenatis, vitae venenatis justo vestibulum. Nullam ornare.",
    3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt imperdiet dictum. Fusce elementum pharetra tellus sed imperdiet. Vivamus cursus.",
  });

  const [sectionTextColor, setSectionTextColor] = useState({
    1: "#000000",
    2: "#000000",
    3: "#000000",
  });

  const [sectionBackgroundColor, setSectionBackgroundColor] = useState({
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
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
        sectionText,
        setSectionText,
        sectionTextColor,
        setSectionTextColor,
        sectionBackgroundColor,
        setSectionBackgroundColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
