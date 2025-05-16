import React, { useState } from "react";
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
  Modal,
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
import summaryIcon from "../component/note.png";
import cornellIcon from "../component/select2.png";
import mindmapIcon from "../component/select3.png";
import customIcon from "../component/select4.png";
import Modal1 from "../component/modal1.png";
import Modal2 from "../component/modal2.png";
import Modal3 from "../component/modal3.png";
import { useNavigate } from "react-router-dom";
import MainToolBar from "./MainToolBar";
import MainSearchBar from "./MainSearchBar";

const modalContent = [
  { name: "요약 & 핵심 문장", img: Modal3 },
  { name: "코넬 노트 기본 구성", img: Modal1 },
  { name: "마인드 맵 기본 구성성", img: Modal2 },
];

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
    keyword: "/creating?keyword=coresummarization",
  },
  {
    title: "코넬 노트",
    desc: "코넬 노트로 깔끔하게 정리된 템플릿",
    img: cornellIcon,
    btn: "요약하러 가기 >",
    color: "#f1e4ff",
    keyword: "/creating?keyword=cornell",
  },
  {
    title: "마인드 맵",
    desc: "마인드 맵 형태로 시각적 탐색이 필요할 때",
    img: mindmapIcon,
    btn: "요약하러 가기 >",
    color: "#ffe9e4",
    keyword: "/creating?keyword=mindmap",
  },
  {
    title: "나만의 요약 스타일 생성",
    desc: "나만의 요약 스타일을 설정하여 DIY 요약 템플릿",
    img: customIcon,
    btn: "요약하러 가기 >",
    color: "#e9ffed",
    keyword: "/prompt",
  },
];

export default function Summarization2() {
  const navigate = useNavigate();

  const [openIdx, setOpenIdx] = useState(null);
  const handleOpen = (idx) => setOpenIdx(idx);
  const handleClose = () => setOpenIdx(null);
  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f7f9fc" }}>
      {/* Sidebar */}
      <MainToolBar add="Summarization" />
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <MainSearchBar />
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
                      onClick={() => handleOpen(idx)}
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
      <Modal
        open={openIdx !== null}
        onClose={handleClose}
        closeAfterTransition
        slotProps={{ backdrop: { sx: { backgroundColor: "rgba(0,0,0,0.4)" } } }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, sm: 1000 },
            maxHeight: "80vh",
            bgcolor: "white",
            borderRadius: 3,
            boxShadow: 24,
            p: 5,
            overflowY: "auto",
          }}
        >
          {openIdx !== null && templates[openIdx].detail}
          <Box sx={{ display: "flex", gap: 20 }}>
            <Typography variant="h6" fontWeight={600}>
              {modalContent[openIdx]?.name}
            </Typography>
            <Box
              component="img"
              src={modalContent[openIdx]?.img}
              sx={{ width: 500 }}
            />
          </Box>
          <Box mt={4} textAlign="center">
            <Button
              variant="contained"
              onClick={() => {
                navigate(templates[openIdx].keyword);
              }}
              sx={{ borderRadius: 2 }}
            >
              요약 생성하기
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
