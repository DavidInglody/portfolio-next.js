import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];

export type projectData = {
  title: string;
  url: string;
  id: string;
  img: string;
  text: string;
  github: string;
  tags: [];
};
