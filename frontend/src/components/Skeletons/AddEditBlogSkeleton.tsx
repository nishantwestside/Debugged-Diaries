import React from "react";
import { Skeleton } from "@progress/kendo-react-indicators";
import { Box } from "@mui/material";

const AddEditBlogSkeleton: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "16px",
        background: "linear-gradient(to bottom, #e3f2fd, #e0f7fa)",
      }}
    >
      <Box
        sx={{
          width: "28%",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        <Skeleton
          shape="text"
          style={{ width: "100%", height: "8rem", borderRadius: "15px" }}
        />
      </Box>

      <Box
        sx={{
          width: "90%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        <Skeleton
          shape="rectangle"
          style={{ width: "100%", height: "3.5rem", borderRadius: "5px" }}
        />
        <Skeleton
          shape="rectangle"
          style={{ width: "100%", height: "10.6rem", borderRadius: "5px" }}
        />
        <Skeleton
          shape="rectangle"
          style={{
            width: "100%",
            height: "3.5rem",
            borderRadius: "5px",
            marginBottom: "8px",
          }}
        />

        <Skeleton
          shape="rectangle"
          style={{ width: "100%", height: "3rem", borderRadius: "5px" }}
        />
      </Box>
    </Box>
  );
};

export default AddEditBlogSkeleton;
