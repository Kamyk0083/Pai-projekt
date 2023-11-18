import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [slider, setSlider] = useState(true);
  const [sliderImg, setSliderImg] = useState({
    1: "/default.jpg",
    2: "/default.jpg",
    3: "/default.jpg",
  });
  const [boxColor, setBoxColor] = useState({
    1: "#808080",
    2: "#808080",
    3: "#808080",
  });
  const [footerText, setFooterText] = useState({
    1: "Projekt made by",
    2: "Ksawery",
  });

  const [boxText, setBoxText] = useState({
    1: "Lorem Ipsum",
    2: "Lorem Ipsum",
    3: "Lorem Ipsum",
    4: "Lorem Ipsum",
    5: "Lorem Ipsum",
    6: "Lorem Ipsum",
    7: "Lorem Ipsum",
    8: "Lorem Ipsum",
    9: "Lorem Ipsum",
    10: "Lorem Ipsum",
    11: "Lorem Ipsum",
    12: "Lorem Ipsum",
    13: "Lorem Ipsum",
    14: "Lorem Ipsum",
    15: "Lorem Ipsum",
    16: "Box 1 topic",
    17: "Box 2 topic",
    18: "Box 3 topic",
  });

  const [sliderText, setSliderText] = useState({
    1: "Slider 1 Text",
    2: "Slider 2 Text",
    3: "Slider 3 Text",
  });

  const [boxOrder, setBoxOrder] = useState({
    1: "1",
    2: "2",
    3: "3",
  });

  const [sliderOrder, setSliderOrder] = useState({
    1: "1",
    2: "2",
    3: "3",
  });

  return (
    <AppContext.Provider
      value={{
        logged,
        setLogged,
        slider,
        setSlider,
        sliderImg,
        setSliderImg,
        boxColor,
        setBoxColor,
        footerText,
        setFooterText,
        boxText,
        setBoxText,
        sliderText,
        setSliderText,
        boxOrder,
        setBoxOrder,
        sliderOrder,
        setSliderOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
