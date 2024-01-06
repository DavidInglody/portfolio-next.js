"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a Front-end developer, who wants to become a React professional
        developer. After Udemy courses and several own projects, spending
        many hours by programming, I'm{" "}
        <span className="font-bold">willing</span> to learn anything
        to <span className="font-bold">fit </span>
        for your projects. I'm looking for a full-time job with friendly and positive
        atmosphere.
      </p>
      <p>
        <span className="underline">
          "A strong body makes the mind strong."
        </span>{" "}
        After developing I really like to go to the gym, running and reading books.
      </p>
    </motion.section>
  );
};
export default About;
