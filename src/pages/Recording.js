import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import MicNoneRoundedIcon from "@mui/icons-material/MicNoneRounded";
import recording from "../component/recording.png";

export default function ReqdyForRecord() {
  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f7fb" }}>
      {/* Sidebar */}

      {/* Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          bgcolor: "white",
        }}
      >
        <Box
          component="img"
          src={recording}
          sx={{
            width: 200,
            height: 200,
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            mt: 5,
            position: "absolute",
            top: "calc(50% + 120px)",
            transform: "translateY(-50%)",
          }}
        >
          요약 정리를 위해서 열심히 듣고 있어요!
        </Typography>
      </Box>
    </Box>
  );
}
