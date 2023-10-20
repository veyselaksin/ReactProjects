import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[8.75rem] h-[8.75rem] rounded-full p-[0.125rem] cursor-pointer bg-blue-gradient`}
    >
      <a
        href="#"
        className="w-full h-full flex font-medium flex-col justify-center items-center text-[1.125rem] font-regular text-[#262626] bg-black-gradient rounded-full"
      >
        <span className="flex flex-row text-gradient items-center justify-center">
          Get
          <img src={arrowUp} alt="arrowUp" />
        </span>
        <span className="text-gradient">Started</span>
      </a>
    </div>
  );
}

export default GetStarted;
