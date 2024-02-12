"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 1);

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
        Passionate and results-driven React Frontend Developer with over 2 years
        of experience. Specializing in crafting dynamic and responsive user
        interfaces, I bring a creative and detail-oriented approach to every
        project. Proficient in the latest{" "}
        <span className="font-bold">React.js</span> frameworks and libraries.
        With a strong foundation in front-end technologies such as{" "}
        <span className="font-bold">
          HTML5, CSS3, and JavaScript/TypeScript
        </span>
        , I am adept at solving complex problems and implementing innovative
        solutions.
      </p>
      <p>
        <span className="underline">
          "A strong body makes the mind strong."
        </span>{" "}
        After developing I really like to go to the gym, running and reading
        books.
      </p>
    </motion.section>
  );
};
export default About;
