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
  Paper,
} from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import MainToolBar from "./MainToolBar";
import MainSearchBar from "./MainSearchBar";
import { useNavigate } from "react-router-dom";

/* ------------------- 데모용 퀴즈 데이터 ------------------- */
const quizData = {
  title: "Quiz",
  lectureTitle: "7주차 1차시 HCI",
  questions: [
    {
      q: "다음 중 하수의 전략으로 분류되는 것은 무엇인가요?",
      options: [
        "건강을 핑계로 콜라겐을 강조한다",
        "통닭이 더 건강하다고 주장한다",
        "엄마에게 직접 “치킨 사줘”라고 말한다",
        "형제자매와 싸운 후 화해를 유도한다",
      ],
    },
    {
      q: "콜라겐을 활용한 전략의 핵심 목적은 무엇인가요?",
      options: [
        "엄마의 관심을 형제에게 돌리기 위함",
        "건강을 명분 삼아 고기를 유도하게 하기 위함",
        "브랜드 선호도를 높이기 위함",
        "치킨 대신 삼겹살을 사게 하기 위함",
      ],
    },
    {
      q: "콜라겐을 언급할 때 가장 노리는 효과는 무엇인가요?",
      options: [
        "엄마가 닭 대신 두부를 권하도록 유도하기 위함",
        "부모님의 입에서 ‘고기’를 직접 언급하게 만들기 위함",
        "형제자매 간에 이간질을 조장하기 위함",
        "통닭과 치킨 브랜드 차이를 강조하기 위함",
      ],
    },
    {
      q: "다음 중 가족 심리를 활용한 전략으로 적절하지 않은 것은?",
      options: [
        "싸운 후 화해 명분으로 치킨 먹기",
        "부모님의 심리를 파악해 역이용하기",
        "비닐장갑을 활용해 주도권 잡기",
        "형제자매가 먹는 것을 보고 참는 전략",
      ],
    },
  ],
};

const answer = ["C", "B", "D", "B"]; // 정답 인덱스: C=2, B=1, D=3, B=1

export default function Quiz() {
  const total = quizData.questions.length;
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0); // 현재 문제 인덱스
  const [selected, setSelected] = useState(null); // 현재 선택 보기
  const [userAnswers, setUserAnswers] = useState(Array(total).fill(null)); // 전체 선택 저장

  const progress = Math.round(((idx + 1) / total) * 100);
  const cur = quizData.questions[idx];

  // 보기 선택 처리
  const handleOptionClick = (optionIdx) => {
    setSelected(optionIdx);
    const updatedAnswers = [...userAnswers];
    updatedAnswers[idx] = optionIdx;
    setUserAnswers(updatedAnswers);
  };

  // 다음 or 제출 버튼 클릭
  const handleNextOrSubmit = () => {
    if (idx < total - 1) {
      setSelected(userAnswers[idx + 1]); // 다음 문제 선택 복원
      setIdx(idx + 1);
    } else {
      // 정답 비교 및 점수 계산
      const score = userAnswers.reduce((acc, cur, i) => {
        const correctIdx = answer[i].charCodeAt(0) - 65; // A=0, B=1, ...
        return acc + (cur === correctIdx ? 1 : 0);
      }, 0);

      navigate("/quizresult?score=" + score + "&total=" + total);
      //   alert(`퀴즈 완료! ${score} / ${total}문제 정답입니다.`);
    }
  };

  // 이전 버튼 클릭
  const handlePrev = () => {
    if (idx > 0) {
      setSelected(userAnswers[idx - 1]);
      setIdx(idx - 1);
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f7f9fc" }}>
      <MainToolBar add="Quiz" />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <MainSearchBar />

        <Box sx={{ p: 6, flexGrow: 1 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 3,
              border: "1px solid #e0e3eb",
              maxWidth: 800,
              mx: "auto",
            }}
          >
            {/* Header */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <IconButton size="small" sx={{ mr: 1 }}>
                <ArrowBackIosNewRoundedIcon fontSize="small" />
              </IconButton>
              <Box
                sx={{
                  flexGrow: 1,
                  bgcolor: "#ffffff",
                  border: "1px solid #C9CCD9",
                  borderRadius: 4,
                  py: 1,
                  px: 3,
                  textAlign: "center",
                }}
              >
                <Typography variant="subtitle1" fontWeight={600}>
                  {quizData.lectureTitle}
                </Typography>
              </Box>
            </Box>

            {/* Title */}
            <Typography variant="h5" fontWeight={700} mb={1}>
              {quizData.title}
            </Typography>

            {/* Progress bar */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
              <Box sx={{ flexGrow: 1, mr: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 8,
                    borderRadius: 2,
                    bgcolor: "#e6e7ea",
                    "& .MuiLinearProgress-bar": { backgroundColor: "#1e2a78" },
                  }}
                />
              </Box>
              <Typography fontWeight={600}>{progress}%</Typography>
            </Box>

            {/* Question */}
            <Typography fontWeight={700} mb={3}>
              Question {idx + 1}/{total} : {cur.q}
            </Typography>

            {/* Options */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}
            >
              {cur.options.map((opt, i) => (
                <Paper
                  key={i}
                  onClick={() => handleOptionClick(i)}
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 1,
                    bgcolor: selected === i ? "#c7d1ff" : "#e9efff",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#d7deff" },
                  }}
                >
                  <Typography>{opt}</Typography>
                </Paper>
              ))}
            </Box>

            {/* Buttons */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
              <Button
                variant="outlined"
                sx={{ borderRadius: 2 }}
                disabled={idx === 0}
                onClick={handlePrev}
              >
                이전
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 2,
                  bgcolor: "#000",
                  "&:hover": { bgcolor: "#333" },
                }}
                onClick={handleNextOrSubmit}
              >
                {idx < total - 1 ? "다음" : "제출"}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
