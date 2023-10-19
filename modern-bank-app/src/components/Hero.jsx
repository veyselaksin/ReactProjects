import React from "react";
import styles from "../style";
import { discount } from "../assets";

function Hero() {
  return (
    <section
      id="home"
      className={` flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[0.375rem] px-4 bg-discount-gradient rounded-[0.625rem] mb-2">
          <img src={discount} alt="discount" className="w-[2rem] h-[2rem]" />
          <span className="text-white font-bold text-[1.2rem]">%20</span>
          <p className="text-[1rem] text-white ml-2">
            Get 3 months of free banking
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
