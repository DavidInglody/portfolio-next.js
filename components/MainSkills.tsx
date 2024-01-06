"use client"
import React, { useEffect, useRef } from "react";
import { mainSkills } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import {MdCircle} from "react-icons/md"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function MainSkills() {
  const component = useRef<HTMLElement>(null)

  useEffect(()=>{
    let ctx = gsap.context(()=>{

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger:component.current,
          start:"top bottom",
          end:"bottom top",
          scrub:4
        }
      })
      tl.fromTo(
        ".tech-row",
        {
          x: (index) => { //function 
            return index % 2 === 0 // modulo every 2nd row
              ? gsap.utils.random(600, 400) // random number between 600 till 400
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease:"power1.inOut",
        }
      );

    }, component)
    return () => ctx.revert() //Clean up
  })

  return (
    <section className="overflow-hidden w-full" ref={component}>
      <SectionHeading>What I use</SectionHeading>
      {mainSkills.map(({ tech_name, tech_color }, index) => {
        return (
          <div key={index} className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          arial-label={tech_name}
          >
            {Array.from({ length: 15 }, (_, index) => (
              <React.Fragment key={index}>
                <span
                  className="tech-item text-8xl font-extrabold uppercase tracking-tighter"
                  style={{
                    color: index === 7 && tech_color ? tech_color : "inherit",
                  }}
                >
                  {tech_name}
                </span>
                <span className="text-3xl">
                  <MdCircle/>
                </span>
              </React.Fragment>
            ))}
          </div>
        );
      })}
    </section>
  );
}
