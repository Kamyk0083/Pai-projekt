import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const [footerText, setFooterText] = useState({
    1: "Projekt made by",
    2: "Ksawery",
  });

  const [boxImg, setBoxImg] = useState({
    1: "https://zbiam.pl/wp-content/uploads/2019/12/FA-18E.jpg",
    2: "https://i.ytimg.com/vi/1VBVIXa2oNk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6uXYs5iAwmJT4IiW4MnTsc7GonQ",
    3: "https://historia.org.pl/wp-content/uploads/2022/05/AH-64-Apache-w-locie-fot.-Nicky-Boogaard-CC-BY-SA-2.0.jpeg",
  });

  const [sectionOrder, setSectionOrder] = useState({
    1: "1",
    2: "2",
  });

  const [sectionBackgroundColor, setSectionBackgroundColor] = useState({
    1: "#ffffff",
    2: "#ffffff",
    3: "#424242",
  });

  const [boxColor, setBoxColor] = useState({
    1: "#ff0000",
    2: "#00ff00",
    3: "#0000ff",
  });

  const [sectionImg, setSectionImg] = useState({
    1: "https://i.wpimg.pl/1280x/filerepo.grupawp.pl/api/v1/display/embed/de3c9159-c42d-4866-9dfd-cb245b9778cb",
  });

  const [boxTitle, setBoxTitle] = useState({
    1: "F-18",
    2: "F-35B",
    3: "AH-64 Apache",
  });
  return (
    <AppContext.Provider
      value={{
        logged,
        setLogged,
        footerText,
        setFooterText,
        boxImg,
        setBoxImg,
        sectionOrder,
        setSectionOrder,
        sectionBackgroundColor,
        setSectionBackgroundColor,
        boxColor,
        setBoxColor,
        sectionImg,
        setSectionImg,
        boxTitle,
        setBoxTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
