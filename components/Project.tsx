"use client";
import Image from "next/image";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSectionInView } from "@/lib/hooks";

type ProjectProps = {
  title: string;
  url: string;
  id: string;
  img: string;
  text: string;
  github: string;
  tags: [];
};

type CustomImageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => string;

const Project = ({ title, url, img, text, github, tags }: ProjectProps) => {
  const { ref } = useSectionInView("Projects", 1);

  const refDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: refDiv,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const protocol = process.env.NODE_ENV === "production" ? "https:" : "http:";
  const loaderProp: CustomImageLoader = ({ src,width,quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={refDiv}
      className="group"
    >
      <section
        ref={ref}
        className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden rounded-lg sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <Link href={url} target="_blank">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold capitalize">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 text-sm dark:text-white/70">
              {text}
            </p>
            <ul className="flex flex-wrap gap-2 mt-4  sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 "
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={`${protocol}${img}`}
            alt={title}
            width={300}
            height={200}
            quality={95}
            loader={loaderProp}
            className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 hidden sm:block

          group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 

          group-even:right-[initial] group-even:-left-40"
          />
        </Link>
      </section>
    </motion.div>
  );
};
export default Project;
