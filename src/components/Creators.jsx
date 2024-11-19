

import React from "react";
// import { LayoutGrid } from "./layout-grid"; // Adjust import path if needed
import { LayoutGrid } from "./LayoutGrid";
export function LayoutGridDemo() {
  return (
    <div id = "content-section" className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Zakir Khan</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Zakir Khan is a celebrated Indian stand-up comedian and poet known for his witty storytelling and the catchphrase "Sakht Launda."
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Aakash Gupta</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Aakash Gupta is a popular Indian comedian recognized for his energetic performances and observational comedy on everyday life.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Samay Raina</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Samay Raina is an Indian stand-up comedian and YouTuber famous for blending humor with his passion for chess, making him a unique figure in the comedy circuit.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Kenny Sebastian</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Kenny Sebastian is a versatile Indian comedian and filmmaker known for his clean humor, musical comedy, and observational jokes on middle-class life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    
    thumbnail:
      "src/assets/Images/ZakirKhan.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "src/assets/Images/Aakash.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "src/assets/Images/Samay.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "src/assets/Images/Kenny.png",
  },
];

