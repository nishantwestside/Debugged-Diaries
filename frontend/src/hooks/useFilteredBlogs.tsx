import { useState, useEffect } from "react";
import { Blog } from "../interfaces/blogTypes";

const useFilteredBlogs = (blogs: Blog[], searchQuery: string) => {
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(blogs);

  useEffect(() => {
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
    setFilteredBlogs(filtered);
  }, [searchQuery, blogs]);

  return filteredBlogs;
};

export default useFilteredBlogs;
