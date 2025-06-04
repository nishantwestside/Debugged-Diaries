import { useState, useEffect } from "react";
import { Blog } from "../interfaces/blogTypes";
import { fetchBlogById } from "../api/blogService";

const useBlogDetails = (id: string) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchedBlog = await fetchBlogById(id);
        setBlog({
          ...fetchedBlog,
          tags: Array.isArray(fetchedBlog.tags)
            ? fetchedBlog.tags
            : fetchedBlog.tags.split(",").map((tag: string) => tag.trim()),
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  return { blog, loading, error };
};

export default useBlogDetails;