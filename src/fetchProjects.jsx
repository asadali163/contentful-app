import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";
const client = createClient({
  space: "uyc2i13f4nmo",
  environment: "master", // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const res = await client.getEntries({ content_type: "projects" });
      const projects = res.items.map((item) => {
        const { title, url, image } = item.fields;
        const { id } = item.sys;
        const img = image?.fields?.file?.url;

        return { title, url, id, img };
      });

      setProjects(projects);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};
