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
        In my previous work, as a soldier, I felt like, I'm able to do something
        harder and useful. I tried to start programming and I love it. After one
        year of learning, I decided to leave my previous work and give 100 % to
        programming and education too. I have fun there with some courses, web
        projects, games and images designs. In the future, I want to learn
        frontend frameworks like: Vue,Angular and many more, if I will need it
        to learn. From backend Node.js.
      </p>
      <p>
        "A strong body makes the mind strong". After developing I really like to
        go to the gym, reading books, running or spend the time with my family.
      </p>
    </motion.section>
  );
};
export default About;
