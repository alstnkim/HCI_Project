import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  LinearProgress,
  Button,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MicNoneRoundedIcon from "@mui/icons-material/MicNoneRounded";

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
          sx={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "radial-gradient(circle, #b4c4e5 0%, #ffffff 70%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 0 4px rgba(180, 196, 229, 0.4)",
          }}
        >
          <IconButton size="large">
            <MicNoneRoundedIcon sx={{ fontSize: 48 }} />
          </IconButton>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            position: "absolute",
            top: "calc(50% + 120px)",
            transform: "translateY(-50%)",
          }}
        >
          수업에 대한 녹음을 시작하기 위해
          <Typography component="span" color="primary" fontWeight={600}>
            {" "}
            버튼
          </Typography>
          을 눌러주세요
        </Typography>
      </Box>
    </Box>
  );
}
