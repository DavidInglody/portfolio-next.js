"use client";

import { experiencesData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/ThemeContext";

const Experience = () => {
  const { ref, inView } = useSectionInView
  ("Experience", 0.3);
  const {theme} = useTheme()
  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255,255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.0.5)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #000"
                    : " 0.4rem solid rgba(255, 255,255, 0.05)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light"?  "#fff" : "rgba(255,255,255,0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};
export default Experience;
