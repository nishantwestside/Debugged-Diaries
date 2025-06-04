import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import BlogList from "../components/BlogList";
import ServerError from "../components/ServerError";
import NoBlogsFound from "../components/NoBlogsFound";
import { Box } from "@mui/material";
import BlogCardSkeleton from "../components/Skeletons/BlogCardSkeleton";
import SearchBarSkeleton from "../components/Skeletons/SearchBarSkeleton";
import useBlogs from "../hooks/useBlogs";
import useFilteredBlogs from "../hooks/useFilteredBlogs";

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { blogs, loading, error } = useBlogs();
  const filteredBlogs = useFilteredBlogs(blogs, searchQuery);
  const uniqueTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags)));

  if (error) return <ServerError errorMessage={error} />;

  const renderLoadingState = () => (
    <>
      <SearchBarSkeleton />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </Box>
    </>
  );

  const renderContent = () => (
    <>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        availableTags={uniqueTags}
      />

      {filteredBlogs.length > 0 ? (
        <BlogList blogs={filteredBlogs} />
      ) : (
        <NoBlogsFound
          message="No blogs match your search criteria."
          onResetFilter={() => {setSearchQuery("")}}
        />
      )}
    </>
  );

  return (
    <div>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #e3f2fd, #e0f7fa)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        {loading ? renderLoadingState() : renderContent()}
      </Box>
    </div>
  );
};

export default HomePage;
