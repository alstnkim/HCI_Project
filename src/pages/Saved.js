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
import recording from "../component/recording.png";
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

export default function Saved() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      <MainToolBar add="Home" />
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Top Bar */}
        <MainSearchBar />
        <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f7fb" }}>
          {/* Content Area */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              bgcolor: "white",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
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
                  transform: "translateY(-50%)",
                }}
              >
                요약 정리를 위해서 열심히 듣고 있어요!
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="#ffffff"
              sx={{
                color: "#ffffff",
                backgroundColor: "#000000",
                width: 200,
                height: 40,
                borderRadius: "999px",
                textTransform: "none",
              }}
              onClick={() => {
                navigate("/summarization");
              }}
            >
              요약 하러가기
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
