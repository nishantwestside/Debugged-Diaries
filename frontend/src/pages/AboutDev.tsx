import React from "react";
import {
  Grid,
  Typography,
  Box,
  Avatar,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import { LinkedIn, GitHub, Description } from "@mui/icons-material";

const AboutDev: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #e3f2fd, #e0f7fa)",
        padding: "2rem",
      }}
    >
      <Grid container spacing={4} alignItems="top">
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Avatar
            alt="Nishant"
            src="/dev.jpg"
            sx={{
              width: "220px",
              height: "220px",
              margin: "0 auto",
              boxShadow: 3,
            }}
          />
          <Typography
            variant="h4"
            sx={{ marginTop: "1rem", fontWeight: "bold" }}
          >
            Nishant Prajapati
          </Typography>

          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              aria-label= "LinkedIn Profile"
              startIcon={<LinkedIn />}
              href="https://www.linkedin.com/in/nishant-prajapati-0907/"
              target="_blank"
            >
              LinkedIn Profile
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#333",
                color: "#fff",
                "&:hover": { backgroundColor: "#555" },
              }}
              aria-label= "Github Profile"
              startIcon={<GitHub />}
              href="https://github.com/nishantwestside"
              target="_blank"
            >
              GitHub Profile
            </Button>
            
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              From Author's Pen
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontStyle: "italic", color: "#555" }}
            >
              "The best skill in the whole world is the skill of learning. So, never stop learning"
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#333",
            }}
          >
            About the Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: "#555",
            }}
          >
            Just a simple guy who loves to code, game, and support Barça 💙❤️.
          </Typography>

          <Box sx={{ marginTop: "2rem" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              Career Highlights
            </Typography>
            <Typography variant="subtitle1" sx={{ lineHeight: 1.8, color: "#555" }}>
              With a strong foundation in computer science and a passion for building impactful solutions, here are some key highlights from my academic and professional journey:
              <ul style={{ marginTop: "0.5rem" }}>
                <li>
                  🎓 Pursuing M.Tech in Information Technology from IIIT Allahabad, with a strong academic foundation in Computer Science and Engineering (B.Tech, CGPA 8.56 with Distinction).
                </li>
                <li>
                  📊 Industry Experience as an Analyst Intern at Expert Right, contributing to business planning, financial modeling, and CRM system development.
                </li>
                <li>
                  🔬 Research Contributor, co-authored a paper on “God’s Eye: An Assistive Device for the Blind” published in Springer, and presented at NICE-DT’23 in New Delhi.
                </li>
              </ul>
            </Typography>
          </Box>

          <Box sx={{ marginTop: "2rem" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              Skills & Expertise
            </Typography>
            <Grid container spacing={1}>
              {[
                "C/C++",
                "React",
                "Python",
                "Azure",
                "OOPs",
                "Data Structures",
                "SQL",
                "MERN Stack",
                "Machine Learning",
                "Web Development",
              ].map((skill, index) => (
                <Grid item key={index}>
                  <Chip
                    label={skill}
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: "2rem" }} />

      <Box
        sx={{
          textAlign: "center",
          padding: "1rem",
          backgroundColor: "#1976d2",
          color: "#fff",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6">
          "Staying humble keeps you for a longer run." – Nishant
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutDev;
