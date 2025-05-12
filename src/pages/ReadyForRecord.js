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
  Modal, // ⬅ 추가
  TextField, // ⬅ 추가
  Link,
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
import { useNavigate, useLocation } from "react-router-dom";
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

export default function ReadyForRecord() {
  const navigate = useNavigate();
  const currentLocation = useLocation();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* --- 파일명 입력 상태 예시 (선택) --- */
  const [fileName, setFileName] = React.useState("");
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      <MainToolBar add="Home" />
      {/* Content Area */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <MainSearchBar />
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
              flexDirection: "column",

              alignItems: "center",
              justifyContent: "center",

              boxShadow: "0 0 0 4px rgba(180, 196, 229, 0.4)",
            }}
          >
            <IconButton size="large" onClick={handleOpen}>
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
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slotProps={{
            backdrop: {
              timeout: 300,
              sx: { backgroundColor: "rgba(0,0,0,0.4)" }, // 뒷배경 어둡게
            },
          }}
        >
          {/* 가운데 정렬 Box */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: 320, sm: 500 },
              bgcolor: "white",
              borderRadius: 3,
              boxShadow: 24,
              p: 5,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* 모달 콘텐츠 */}
            <Typography variant="subtitle1" fontWeight={600}>
              녹음 후에 저장될 파일명을 입력해주세요!
            </Typography>

            <TextField
              placeholder="ex. 수업명_일자_차수"
              size="small"
              fullWidth
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
            <Button onClick={() => navigate("/recording")}>
              녹음 생성하기
            </Button>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
