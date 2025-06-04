import { useState, useEffect } from "react";
import { fetchBlogs } from "../api/blogService";
import { Blog } from "../interfaces/blogTypes";

const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const data = await fetchBlogs();

        const formattedData = data.map((blog: { tags: any }) => ({
          ...blog,
          tags: Array.isArray(blog.tags)
            ? blog.tags
            : (blog.tags || "").split(",").map((tag: string) => tag.trim()),
        }));

        setBlogs(formattedData);
      } catch (err) {
        setError("Network error! Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return { blogs, loading, error };
};

export default useBlogs;
