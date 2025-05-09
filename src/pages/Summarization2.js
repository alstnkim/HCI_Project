import React, { useEffect, useState } from "react";
import {
  Box, AppBar, Toolbar, IconButton, InputBase,
  Typography, List, ListItemButton, ListItemIcon,
  ListItemText, LinearProgress, Button, Grid, Paper, Modal
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
import { useLocation, useNavigate } from "react-router-dom";

// --- 서비스 임포트
import { summarizeText } from "../services/summaryService.js";

const navMain = [ /* … */ ];
const navOther = [ /* … */ ];
const templates = [ /* … */ ];
const modalContent = [ /* … */ ];

export default function Summarization2() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name } = location.state || {};

  const [openIdx, setOpenIdx] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  // 저장된 텍스트 ID로 바로 요약 호출
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    summarizeText(id)
      .then(res => setSummary(res.summary))
      .catch(err => {
        console.error(err);
        alert("요약 중 오류가 발생했습니다.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleOpen = idx => setOpenIdx(idx);
  const handleClose = () => setOpenIdx(null);

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f7f9fc" }}>
      {/* ── Sidebar 생략 ── */}

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* ── TopBar 생략 ── */}

        <Box sx={{ p: 6, flexGrow: 1 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {name} 요약 결과
          </Typography>

          {loading ? (
            <LinearProgress sx={{ mb: 2 }} />
          ) : (
            <Typography sx={{ whiteSpace: "pre-line", mb: 4 }}>
              {summary}
            </Typography>
          )}

          <Grid container spacing={5}>
            {templates.map((tpl, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4, display: "flex", alignItems: "center", gap: 3,
                    borderRadius: 3, bgcolor: tpl.color,
                    transition: "box-shadow .2s", "&:hover": { boxShadow: 3 },
                    width: 450, height: 200
                  }}
                >
                  {/* … 템플릿 카드 렌더링 … */}
                  <Button
                    variant="contained"
                    onClick={() => handleOpen(idx)}
                  >
                    {tpl.btn}
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Modal
        open={openIdx !== null}
        onClose={handleClose}
        slotProps={{ backdrop: { sx: { backgroundColor: "rgba(0,0,0,0.4)" } } }}
      >
        <Box
          sx={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, sm: 1000 }, maxHeight: "80vh",
            bgcolor: "white", borderRadius: 3, boxShadow: 24,
            p: 5, overflowY: "auto"
          }}
        >
          {/* 선택된 템플릿 상세 & 생성 버튼 */}
          <Typography variant="h6" fontWeight={600} sx={{ mb:2 }}>
            {modalContent[openIdx]?.name}
          </Typography>
          {/* … 이미지, 설명 등 … */}
          <Box textAlign="center" mt={4}>
            {/* 요약이 이미 완료된 상태이므로 그대로 결과 보여줘도 되고, 
                필요시 여기서 재요약 호출해도 됩니다 */}
            <Button
              variant="contained"
              onClick={() => navigate("/creating", { state: { summary } })}
            >
              최종 요약 보기
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
