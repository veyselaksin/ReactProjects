import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

function Hero() {
  return (
    <section
      id="home"
      className={` flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="test">
          <img src={discount} alt="discount" className="w-[2rem] h-[2rem]" />
          <p className={` ${styles.paragraph} text-white ml-2`}>
            <span className="text-white font-bold text-[1.2rem]">20% </span>
            Discount for <span className="text-white">1 Month</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-semibold ss:text-[4.5rem] text-[3.25rem] flex flex-col">
            The Next
            <span className="text-gradient text-[3.25rem] sm:block">
              Generation{" "}
            </span>
            Payment Method
          </h1>
          <div className="ss:flex md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-semibold text-[1.2rem] mt-[1rem]">
          <p className="leading-[2rem] sm:max-w-[50%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem excepturi recusandae amet iusto beatae atque corrupti
            aspernatur ab totam error, possimus temporibus quidem officiis quis
            provident. Rem ab temporibus necessitatibus.
          </p>
        </h1>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
}

export default Hero;
