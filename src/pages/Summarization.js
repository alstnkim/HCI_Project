import React, { useRef, useState } from "react";
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
  Grid,
  Paper,
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
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useNavigate } from "react-router-dom";
import MainToolBar from "./MainToolBar";
import MainSearchBar from "./MainSearchBar";

/* ------------------- 네비게이션 데이터 ------------------- */
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

export default function Summarization() {
  /* ------------------- state ------------------- */
  const [files, setFiles] = useState(Array(11).fill("week 7 HCI 요약본"));

  /* ------------------- refs ------------------- */
  const fileInputRef = useRef(null);

  /* ------------------- handlers ------------------- */
  const handleSelectAudio = (e) => {
    const chosen = e.target.files && e.target.files[0];
    if (!chosen) return;
    setFiles((prev) => [chosen.name, ...prev]);
    e.target.value = ""; // 같은 파일 재선택 시 이벤트 발생을 위해 초기화
  };

  const triggerFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };
  const navigate = useNavigate();

  /* ------------------- render ------------------- */
  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f7f9fc" }}>
      <MainToolBar add="Summarization" />
      {/* ============ Main Content ============ */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <MainSearchBar />
        {/* Grid */}
        <Box sx={{ p: 6, flexGrow: 1 }}>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Summarization
          </Typography>

          {/* 숨겨진 input */}
          <input
            type="file"
            accept="audio/*"
            ref={fileInputRef}
            onChange={handleSelectAudio}
            style={{ display: "none" }}
          />

          <Grid container spacing={4}>
            {/* 새 파일 추가 */}
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Paper
                elevation={0}
                sx={{
                  border: "2px dashed #b0b7c6",
                  borderRadius: 2,
                  height: 140,
                  width: 140,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all .2s",
                  "&:hover": { borderColor: "#7991d6" },
                }}
                onClick={triggerFilePicker}
              >
                <AddBoxOutlinedIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="body2">새 파일 추가</Typography>
              </Paper>
            </Grid>

            {/* 파일 카드 */}
            {files.map((name, idx) => (
              <Grid
                key={idx}
                item
                xs={6}
                sm={4}
                md={3}
                lg={2}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    border: "1px solid #d0d5e1",
                    borderRadius: 2,
                    height: 140,
                    width: 140,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "box-shadow .2s",
                    "&:hover": { boxShadow: 2 },
                  }}
                  onClick={() => {
                    navigate("/summarization2");
                  }}
                >
                  <InsertDriveFileOutlinedIcon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography
                    variant="body2"
                    sx={{ textAlign: "center", mx: 1 }}
                  >
                    {name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
