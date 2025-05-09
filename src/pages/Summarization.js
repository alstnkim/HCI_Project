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
      {/* ============ Sidebar ============ */}
      <Box
        sx={{
          width: 220,
          px: 2,
          py: 3,
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(180deg,#8da4db 0%,#ffffff 100%)",
        }}
      >
        <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
          YOJEONG
        </Typography>
        {/* Main */}
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Main
        </Typography>
        <List sx={{ mb: 2 }}>
          {navMain.map((item) => (
            <ListItemButton
              key={item.label}
              selected={item.label === "Summarization"}
              sx={{ borderRadius: 1, mb: 1 }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
        {/* Other */}
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Other
        </Typography>
        <List>
          {navOther.map((item) => (
            <ListItemButton key={item.label} sx={{ borderRadius: 1, mb: 1 }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }} />
        {/* Subscription */}
        <Typography variant="caption" color="text.secondary">
          Subscription
        </Typography>
        <LinearProgress
          variant="determinate"
          value={63}
          sx={{ height: 6, borderRadius: 5, my: 1 }}
        />
        <Typography variant="caption" sx={{ mb: 1 }}>
          19 summaries used of 30
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{ textTransform: "none", borderRadius: 2 }}
        >
          Upgrade
        </Button>
      </Box>

      {/* ============ Main Content ============ */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* TopBar */}
        <AppBar
          elevation={0}
          position="static"
          sx={{
            backgroundImage: "linear-gradient(90deg,#8ea4db 0%,#c5d1e8 100%)",
            py: 1,
          }}
        >
          <Toolbar sx={{ gap: 2 }}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: "60%",
                  bgcolor: "white",
                  borderRadius: 20,
                  px: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase
                  placeholder="Search Field Text"
                  sx={{ width: "100%" }}
                />
              </Box>
            </Box>
            <IconButton>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

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
