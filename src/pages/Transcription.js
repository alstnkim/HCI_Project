import React from "react";
import { Box, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import { useNavigate } from "react-router-dom";
import MainToolBar from "./MainToolBar";
import MainSearchBar from "./MainSearchBar";

const navMain = [
  { label: "Home", icon: <HomeRoundedIcon /> },
  { label: "Transcription", icon: <ArticleOutlinedIcon /> },
  { label: "Summarization", icon: <SummarizeOutlinedIcon /> },
  { label: "Quiz", icon: <QuizOutlinedIcon /> },
];

const navOther = [
  { label: "Learn more", icon: <InfoOutlinedIcon /> },
  { label: "Contact", icon: <ContactSupportOutlinedIcon /> },
];

export default function Transcription() {
  const navigate = useNavigate();

  const fileList = [
    "week 7 HCI 수업 녹음본",
    "week 8 HCI 수업 녹음본",
    "week 9 HCI 수업 녹음본",
    "week 7 HCI 수업 녹음본",
    "week 8 HCI 수업 녹음본",
    "week 9 HCI 수업 녹음본",
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f7f9fc" }}>
      <MainToolBar add="Transcription" />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <MainSearchBar />

        <Typography variant="h5" fontWeight={600} sx={{ px: 4, py: 3 }}>
          Transcription
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            px: 4,
            pb: 4,
          }}
        >
          {fileList.map((file, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 100,
                  border: "2px solid black",
                  borderRadius: 2,
                }}
              />
              <Typography variant="body2" sx={{ mt: 1 }}>
                {file}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
