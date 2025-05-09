import React, { useRef, useState } from "react";
import {
  Box, AppBar, Toolbar, IconButton, InputBase, Typography,
  List, ListItemButton, ListItemIcon, ListItemText,
  LinearProgress, Button, Grid, Paper
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
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

// --- 서비스 임포트
import { uploadAudioFile } from "../services/audioService";

const navMain = [ /* … */ ];
const navOther = [ /* … */ ];

export default function Summarization() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // 이제 files는 [{ id, name, text }]
  const [files, setFiles] = useState([]);

  // 1) 오디오 선택 → 업로드 → DAGLO + 저장 API 호출
  const handleSelectAudio = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      // uploadAudioFile → { id, text }
      const { id, text } = await uploadAudioFile(file);
      setFiles(prev => [{ id, name: file.name, text }, ...prev]);
    } catch (err) {
      console.error(err);
      alert("음성 변환 중 오류가 발생했습니다.");
    } finally {
      e.target.value = "";
    }
  };

  const triggerFilePicker = () => fileInputRef.current?.click();

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f7f9fc" }}>
      {/* ── 사이드바 생략 ── */}

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* ── AppBar 생략 ── */}

        <Box sx={{ p: 6, flexGrow: 1 }}>
          <Typography variant="h4" sx={{ mb: 4 }}>Summarization</Typography>

          <input
            type="file"
            accept="audio/*"
            ref={fileInputRef}
            onChange={handleSelectAudio}
            style={{ display: "none" }}
          />

          <Grid container spacing={4}>
            {/* 새 파일 추가 */}
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Paper
                elevation={0}
                sx={{
                  border: "2px dashed #b0b7c6", borderRadius: 2,
                  height: 140, width: 140,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  cursor: "pointer", "&:hover": { borderColor: "#7991d6" }
                }}
                onClick={triggerFilePicker}
              >
                <AddBoxOutlinedIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="body2">새 파일 추가</Typography>
              </Paper>
            </Grid>

            {/* 변환된 파일 리스트 */}
            {files.map(({ id, name }, idx) => (
              <Grid key={idx} item xs={6} sm={4} md={3} lg={2}>
                <Paper
                  elevation={0}
                  sx={{
                    border: "1px solid #d0d5e1", borderRadius: 2,
                    height: 140, width: 140,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    cursor: "pointer", "&:hover": { boxShadow: 2 }
                  }}
                  onClick={() =>
                    navigate("/summarization2", { state: { id, name } })
                  }
                >
                  <InsertDriveFileOutlinedIcon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
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
