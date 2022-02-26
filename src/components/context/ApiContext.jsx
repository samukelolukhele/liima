import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Icons from "../Icons";

export const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [metar, setMetar] = useState([]);
  const [copySuccess, setCopySuccess] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const url = `https://api.checkwx.com/metar/${search}/decoded/?x-api-key=`;


  const handleChange = (e) => {
    const { name, value } = e.target;

    setSearch((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleIcon = (symbol, styles) => {
    if (!metar.icao) return;


      return <Icons className={styles} symbol={symbol} />;
    
  };


  



  const handleCopy = async (copy) => {
    setCopySuccess(false);

    try {
      await navigator.clipboard.writeText(copy);
      setCopySuccess(true);
      console.log(copySuccess)
    } catch (err) {
      console.log(err)
    }
  };

  const handleOnKeyPress = (e) => e.key === "Enter" && getMetar(url);


  const checkApiValue = (value) => {
    return value !== undefined ? value : "Unavailable";
  };

  const getMetar = async (url) => {
    setLoading(true);
    setError(false);
    await axios
      .get(url + apiKey)
      .then((res) => {
        if (res.data.data[0]) {
          return setMetar(res.data.data[0]);
        } else {
          return setError(true);
        }
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });

    setLoading(false);
  };

  const checkData = (...queries) => {
    if(!metar.icao) return;

    return (metar?.[queries])
  }

  const checkClouds = (prop) => {
    if (!metar?.clouds || metar?.clouds[0]?.code === "OVX")
      return "Unavailable";

    return checkApiValue(metar?.clouds[0]?.[prop]);
  };

  const checkWind = () => {
    if (!metar?.wind) return "Unavailable";

    return `${checkApiValue(metar.wind?.speed_kts)}KTS 
  ${
    metar.raw_text?.includes("VRB")
      ? "Variable"
      : checkApiValue(metar.wind?.degrees) + "°"
  }`;
  };

  const airportObject = {
    klax: "Los Angeles Int. Airport",
    kjfk: "John F. Kennedy Airport",
    egll: "Heathrow Int. Airport",
    egcc: "Manchester Airport",
    lfpg: "Paris-Charles du Gaulle Airport",
    lfll: "Lyon Saint-Exupéry Airport",
    yssy: "Sydney Airport",
    ypph: "Perth Int. Airport",
    rjaa: "Narita Int. Airport",
    rjbb: "Kansai Int. Airport",
  };

  return (
    <ApiContext.Provider
      value={{
        loading,
        error,
        metar,
        handleIcon,
        search,
        copySuccess,
        setSearch,
        getMetar,
        airportObject,
        checkWind,
        checkClouds,
        checkData,
        handleChange,
        handleOnKeyPress,
        handleCopy,
        checkApiValue,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
