// import React from "react";

// import { InfiniteMovingCards } from "./ReviewsStruct";
// export function InfiniteMovingCardsDemo() {
//   return (
//     <div
//       className="h-[40rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
//     >
//       <InfiniteMovingCards items={testimonials} direction="right" speed="medium" />
//     </div>
//   );
// }

import React from "react";
import { InfiniteMovingCards } from "./ReviewsStruct";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
      {/* White line with 'Reviews' text */}
      <div className="w-full flex items-center relative">
        <div className="w-full border-t border-white absolute top-0" />
        <h2 className="absolute top-[-1rem] left-0 bg-black px-4 text-white text-4xl font-bold">
          Reviews
        </h2>
      </div>

      {/* Infinite moving cards section */}
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}





















const testimonials = [
  {
    quote:
      "Only Much Louder has redefined the entertainment landscape. Their creativity and dedication to every project are unmatched, making them the go-to agency for any large-scale event.",
    name: "Alex Johnson",
    title: "Chief Experience Officer at Google",
  },
  {
    quote:
      "Working with Only Much Louder was a game-changer. They handle every detail with precision, bringing a unique energy to events that leaves the audience in awe.",
    name: "Samantha Rivera",
    title: "Global Events Director at YouTube",
  },
  {
    quote:
      "Only Much Louder understands the heartbeat of modern entertainment. Their team is a powerhouse of talent, turning every show into a spectacular experience.",
    name: "Daniel Lee",
    title: "Head of Creative Innovation at Spotify",
  },
  {
    quote:
      "When it comes to delivering unforgettable performances, Only Much Louder is in a league of its own. Their professionalism and passion shine through in every project.",
    name: "Melissa Turner",
    title: "Senior Brand Strategist at Netflix",
  },
  {
    quote:
      "From concept to execution, Only Much Louder is the partner you need. They elevate every aspect of production, making each event memorable and impactful.",
    name: "Jason Clarke",
    title: "Vice President of Global Partnerships at Amazon Music",
  },
];

