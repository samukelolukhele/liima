import { useContext, useState } from "react";
import "./App.css";
import { ApiContext } from "./components/context/ApiContext";
import Icon from "./components/Icons";
import bg from "./images/bg.jpeg";
import Marquee from "react-fast-marquee";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Message from "./components/Message";

function App() {
  const {
    loading,
    handleOnKeyPress,
    handleCopy,
    copySuccess,
    error,
    getMetar,
    setSearch,
    search,
    metar,
    handleIcon,
    checkWind,
    checkClouds,
    checkApiValue,
    airportObject,
  } = useContext(ApiContext);


  const sampleAirports = Object.entries(airportObject).map(([key, value]) => {
    return (
      <h1 key={key} className="mx-4 text-gray-400">
        <span className="text-[#ffffff]">{key.toUpperCase()}</span> - {value}
      </h1>
    );
  });

  return (
    <div className="relative">
      <div className="relative flex flex-col items-center py-4 justify-center w-full h-max min-h-[95vh]">
        <img
          src={bg}
          alt="hero"
          className="absolute w-full h-full object-cover -z-10 grayscale"
        />

        <h1 className=" font-logo mb-auto text-[2.5rem] mx-auto logo-gradient">
          LIIMA
        </h1>

        <div className="max-w-screen-md h-max w-11/12 mb-auto flex flex-col p-6 bg-[rgba(36,36,36,0.9)] rounded-2xl">
          <div
            className={`flex flex-row justify-between text-gray-500 text-sm mb-3 w-11/12 mx-auto ${
              !metar.icao && "hidden"
            }`}
          >
            <p className="w-6/12">{`Observed at: ${checkApiValue(
              metar.observed
            )}`}</p>
            <p className={`text-white text-lg font-bold mr-2 md:hidden`}>
              {checkApiValue(metar.flight_category)}
            </p>
          </div>
          <div className="flex flex-row justify-between w-11/12 mx-auto">
            <div className="w-8/12 md:w-9/12 flex flex-col">
              <input
                className="placeholder:text-[0.40rem] placeholder:my-auto md:placeholder:text-xs rounded-2xl w-full py-1 pl-4"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter aerodome 4 letter ICAO code here..."
                onKeyPress={(e) => handleOnKeyPress(e)}
              />
              <div className="flex flex-col mx-2">
                <h1
                  className={`text-xl md:text-2xl my-3 font-extrabold ${
                    !metar.station?.name && "hidden"
                  }`}
                >
                  {checkApiValue(metar.station?.name)}
                </h1>
                <ul
                  className={`flex flex-col my-4 font-extralight text-gray-300 list-none ${
                    !metar.icao && "hidden"
                  }`}
                >
                  <li className="flex flex-row items-center my-1">
                    <Icon symbol="wind" />

                    <p className="ml-4">{checkWind()}</p>
                  </li>
                  <li className="flex flex-row items-center my-1">
                    <Icon symbol="visibility" />

                    <p className="ml-4">{`${checkApiValue(
                      metar.visibility?.meters
                    )} m`}</p>
                  </li>
                  <li className="flex flex-row items-center my-1">
                    <Icon symbol="pressure" />

                    <p className="ml-4">{`${checkApiValue(
                      metar.barometer?.hpa
                    )}hpa`}</p>
                  </li>
                  <li className="flex flex-row items-center my-1">
                    <Icon symbol="dew" />

                    <p className="ml-4">{`${checkApiValue(
                      metar.dewpoint?.celsius
                    )} °C`}</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center flex-col">
              <button
                className="w-max ml-1 px-2 py-2 outline-none bg-black rounded-full text-white"
                onClick={() => getMetar(url)}
              >
                <p className="text-gray-400">
                  <Icon symbol="search" />
                </p>
              </button>
              <ul className="flex flex-col items-center justify-center">
                <li
                  className={`flex flex-col my-3 ${
                    !metar.temperature?.celsius && "hidden"
                  }`}
                >
                  <h1 className="text-3xl text-center font-semibold">{`${checkApiValue(
                    metar.temperature?.celsius
                  )}°`}</h1>
                  <p className="text-sm font-thin">Celsius</p>
                </li>
                <li className="flex flex-col">
                  <h1 className="flex items-center justify-center text-center text-3xl mb-1">
                    {handleIcon(checkClouds("code"))}
                  </h1>
                  <p
                    className={`text-sm text-center font-thin ${
                      !metar.clouds && "hidden"
                    }`}
                  >
                    {checkClouds("text")}
                  </p>
                </li>
              </ul>
            </div>
            <p
              className={`font-bold text-2xl hidden md:flex ${
                !metar.flight_category && "md:hidden"
              }`}
            >
              {checkApiValue(metar.flight_category)}
            </p>
          </div>

          <div
            onClick={() => handleCopy(checkApiValue(metar.raw_text))}
            className={`relative h-max w-11/12 mx-auto rounded-lg bg-[#111111] p-3 flex items-center justify-center cursor-pointer ${
              !metar.raw_text && "hidden"
            }`}
          >
            <p>{checkApiValue(metar.raw_text)}</p>
            {handleIcon(
              "clipboard",
              "text-[5rem] mx-2 md:text-2xl md:top-50 right-2 text-gray-500"
            )}
          </div>
          {copySuccess && <Message>Metar copied to clipboard!</Message>}
          {loading && <Loading />}
          {error && (
            <p className="w-6/12 mx-auto mt-2 text-sm text-center">
              No results found. Please check if you have entered a valid ICAO
              code.
            </p>
          )}
        </div>
      </div>
      <Marquee
        style={{
          backgroundColor: "black",
        }}
        gradient={false}
        speed={60}
      >
        {sampleAirports}
      </Marquee>
      <Footer />
    </div>
  );
}

export default App;
