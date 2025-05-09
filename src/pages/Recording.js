import React, { useState, useRef, useEffect } from "react";
import {
  Box, AppBar, Toolbar, IconButton, InputBase, Typography,
  List, ListItemButton, ListItemIcon, ListItemText, LinearProgress, Button
} from "@mui/material";
import MicNoneRoundedIcon from "@mui/icons-material/MicNoneRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";
import { uploadAudioFile } from "../services/audioService";

const navMain = [ /* … */ ];
const navOther = [ /* … */ ];

export default function Recording() {
  const navigate = useNavigate();

  // MediaRecorder 참조
  const mediaRecorderRef = useRef(null);
  const [chunks, setChunks] = useState([]);
  const [recording, setRecording] = useState(false);

  // 녹음 시작
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mr = new MediaRecorder(stream);
    mediaRecorderRef.current = mr;
    mr.ondataavailable = e => {
      if (e.data.size > 0) setChunks(prev => [...prev, e.data]);
    };
    mr.onstop = handleStop;
    mr.start();
    setRecording(true);
  };

  // 녹음 정지 → Blob 생성 → API 호출
  const handleStop = async () => {
    setRecording(false);
    const blob = new Blob(chunks, { type: "audio/webm" });
    setChunks([]); // 초기화

    try {
      const { id, text } = await uploadAudioFile(new File([blob], "record.webm"));
      // 텍스트와 id를 쿼리스트링으로 넘기거나 전역 상태에 저장
      navigate("/summarization2", { state: { id, text } });
    } catch (err) {
      console.error(err);
      alert("녹음 파일 업로드 중 오류가 발생했습니다.");
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar … 그대로 */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <AppBar position="static" sx={{ background: "linear-gradient(90deg,#8ea4db 0%,#c5d1e8 100%)" }}>
          <Toolbar>
            {/* 서치바, 아이콘 … 그대로 */}
          </Toolbar>
        </AppBar>

        <Box sx={{ flexGrow: 1, bgcolor: "#f5f7fb", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box textAlign="center">
            {recording ? (
              <IconButton color="error" onClick={() => mediaRecorderRef.current.stop()}>
                <StopRoundedIcon sx={{ fontSize: 60 }} />
              </IconButton>
            ) : (
              <IconButton color="primary" onClick={startRecording}>
                <MicNoneRoundedIcon sx={{ fontSize: 60 }} />
              </IconButton>
            )}
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              {recording ? "녹음 중…" : "버튼을 눌러서 녹음을 시작하세요"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
