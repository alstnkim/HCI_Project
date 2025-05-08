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
// 이미지 에셋 (원하는 경로로 교체하세요)
import summaryIcon from "../component/note.png";
import cornellIcon from "../component/select2.png";
import mindmapIcon from "../component/select3.png";
import customIcon from "../component/select4.png";

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

const templates = [
  {
    title: "요약 & 핵심 문장",
    desc: "간단한 요약과 핵심 문장을 하이라이트로 제공하는 간편 템플릿",
    img: summaryIcon,
    btn: "요약하러 가기 >",
    color: "#d7e9ff",
  },
  {
    title: "코넬 노트",
    desc: "코넬 노트로 깔끔하게 정리된 템플릿",
    img: cornellIcon,
    btn: "요약하러 가기 >",
    color: "#f1e4ff",
  },
  {
    title: "마인드 맵",
    desc: "마인드 맵 형태로 시각적 탐색이 필요할 때",
    img: mindmapIcon,
    btn: "요약하러 가기 >",
    color: "#ffe9e4",
  },
  {
    title: "나만의 요약 스타일 생성",
    desc: "나만의 요약 스타일을 설정하여 DIY 요약 템플릿",
    img: customIcon,
    btn: "요약하러 가기 >",
    color: "#e9ffed",
  },
];

export default function Summarization2() {
  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f7f9fc" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 220,
          px: 2,
          py: 3,
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(180deg, #8da4db 0%, #ffffff 100%)",
        }}
      >
        <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
          YOJEONG
        </Typography>

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

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Top Bar */}
        <AppBar
          elevation={0}
          position="static"
          sx={{
            backgroundImage: "linear-gradient(90deg, #8ea4db 0%, #c5d1e8 100%)",
            py: 1,
          }}
        >
          <Toolbar sx={{ gap: 2 }}>
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
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

        {/* Template Cards */}
        <Box
          sx={{
            p: 6,
            flexGrow: 1,
            alignContent: "center",
          }}
        >
          <Grid
            container
            spacing={5}
            sx={{
              width: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {templates.map((tpl, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    borderRadius: 3,
                    bgcolor: tpl.color,
                    border: tpl.border || "1px solid #d4d9e8",
                    transition: "box-shadow .2s",
                    "&:hover": { boxShadow: 3 },
                    width: 450,
                    height: 200,
                  }}
                >
                  <Box
                    component="img"
                    src={tpl.img}
                    alt={tpl.title}
                    sx={{ width: 120 }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" fontWeight={600} gutterBottom>
                      {tpl.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {tpl.desc}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: 2 }}
                    >
                      {tpl.btn}
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
