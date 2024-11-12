import React from "react";
import { ContainerScroll } from "./IpadScroll";

export function HeroScrollDemo() {
  return (
    <div id = "content-section" className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-black">
              Love The stand up gigs of your favourite creators? <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                We Produced them!!
              </span>
            </h1>
          </>
        }
      >
        <img
          src="src/assets/Images/ZakirKhan.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export default HeroScrollDemo;
