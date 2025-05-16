import React, { useState } from "react";
import {
  Box,
  Paper,
  IconButton,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

// 공통 컴포넌트
import MainToolBar from "./MainToolBar";
import MainSearchBar from "./MainSearchBar"; // 상단 AppBar 포함 검색창

export default function CauseEffectPromptPage() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/creating?keyword=result", { state: { prompt } });
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f7fb" }}>
      {/* 왼쪽 사이드바 */}
      <MainToolBar add="Summarization" />

      {/* 오른쪽 컨텐츠 영역 */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* 상단 검색 바 */}
        <MainSearchBar />

        {/* 페이지 컨텐츠 */}
        <Box sx={{ flexGrow: 1, p: 4 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <IconButton onClick={() => navigate(-1)}>
                <ArrowBackIosNewIcon />
              </IconButton>
              <Typography variant="h6" sx={{ ml: 1 }}>
                개인 맞춤 설정 - 인과관계 요약 요청
              </Typography>
            </Box>

            <Typography sx={{ mb: 2 }}>
              요약 방식을 개인적으로 설정해보세요.
              <br />
              예시: <b>“인과 관계에 따라 요약해줘”</b>
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                label="요약 요청 문장"
                fullWidth
                multiline
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                sx={{ mb: 3 }}
                minRows={3}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ borderRadius: 2 }}
                disabled={!prompt.trim()}
              >
                인과 관계 요약 보기
              </Button>
            </form>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
