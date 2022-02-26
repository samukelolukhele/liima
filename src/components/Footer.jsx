import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col w-screen bg-[#1e1e1e]">
      <div className={`flex items-center justify-center border-t-2 border-[#707070] h-max}`}>
        <p className='text-center text-sm w-11/12 md:w-6/12 md:text-md py-6'>
          Do not use this website as your only source of information. You, as
          pilot in command, are solely responsible for assuring correct data and
          proper loading of your aircraft prior to flight.
        </p>
      </div>
        <div className='flex flex-row justify-between px-2 py-2 w-screen bg-black text-[0.60rem] md:text-[.8rem] md:px-4 '>
          <p>©2022 Liima</p>
          <p>Written and Designed  By Samukelo L.</p>
        </div>
    </div>
  );
}
