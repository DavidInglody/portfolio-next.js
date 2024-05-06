import { createClient } from "contentful";

export const revalidate = 5;

const client = createClient({
  space: "kv543ap6rpf7",
  environment: "master",
  accessToken: process.env.VITE_API_KEY as string,
});

const useFetchProjects = async () => {
  try {
    const response = await client.getEntries({ content_type: "ownProjects" });
    const projects = response.items.map((item) => {
      const id = item.sys.id;
      const { title, url, image, text, github, tags } = item.fields;
      const img = (image as any).fields?.file?.url;
      return { title, url, id, img, text, github, tags };
    });
    return projects;
  } catch (error) {
    console.error(error);
  }
};

export default useFetchProjects;
