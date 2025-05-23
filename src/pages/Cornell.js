import React from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  IconButton,
  Button,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

// 공통 레이아웃 컴포넌트
import MainToolBar from "./MainToolBar";
import MainSearchBar from "./MainSearchBar";

const cornell = {
  topic: "치킨 먹기 위한 명분과 전략",
  flow: {
    도입:
      "치킨을 먹기 위해서는 ‘명분’이 필요하며, 단순히 '치킨 먹고 싶다'고 하면 안 통한다는 것을 강조한다.",
    전개:
      "명분을 만드는 전략을 단계별로 소개한다. 콜라겐, 단백질 등 건강 명분을 통해 고기 섭취를 정당화하며, 통닭 표현을 사용하고 간접화법으로 대화를 이끈다.",
    결말:
      "치킨을 먹는 데 성공했다면, 어떻게 먹을 것인가까지 전략적으로 접근. 닭다리 전술, 시선 돌리기, 감정 유도 등 먹는 기술로 마무리.",
  },
  keyStrategies: [
    ["명분 만들기", "건강을 이유로 치킨 먹기 위한 명분 구성 (콜라겐)"],
    ["콜라겐 vs 단백질", "고기를 정당화하는 단어로 콜라겐이 더 설득력 있음"],
    ["이이제이 전략", "엄마의 말로 엄마를 설득"],
    ["닭 외 다른 고기 제거", "소/돼지는 집에 있다. 오리는 희귀하다 → 결국 닭"],
    ["간접화법", "‘치킨 싫은 척’하며 엄마 입에서 먼저 나오게 유도"],
    ["가정 내 갈등 유도", "싸움 유발 후 화해 명분으로 치킨 요청"],
    ["심리전", "부모 감정 조절, 자식 역할 수행 강조로 설득 강화"],
    ["먹는 기술", "닭다리 분배 전술, 시선 분산으로 더 먹기"],
    ["행동화 추천", "‘집에 가서 바로 시도해봐’로 실천 유도"],
  ],
  message:
    "이 스크립트는 단순한 ‘치킨 먹는 법’을 넘어서, 상황을 조율하고 인간 심리를 이용해 원하는 바를 얻는 법을 코믹하게 풍자한 강의다. 결국엔 ‘치킨이 가정의 화해이자 행복’이라는 메시지를 전달하며, 고도의 사회적 설득 기술을 유쾌하게 보여준다.",
  learnings: [
    "설득의 기술: 감정과 논리를 전략적으로 활용하는 법",
    "상대 중심 대화법: 직접 요구보다 상대의 언어로 유도",
    "사회적 역할 인식: 자녀로서 부모 설득에 유리한 포지셔닝",
    "유머와 과장 사용법: 메시지를 강하게 전달하고 공감 유도",
    "비판적 사고 훈련: 말과 행동 뒤 의도를 파악하는 연습",
  ],
};

export default function CornellNotePage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f7fb" }}>
      <MainToolBar add="Summarization" />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <MainSearchBar />
        <Box sx={{ flexGrow: 1, p: 4 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <IconButton onClick={() => navigate(-1)}>
                <ArrowBackIosNewIcon />
              </IconButton>
              <Typography variant="h6" sx={{ ml: 1 }}>
                전개전략형 요약
              </Typography>
            </Box>

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell variant="head" sx={{ bgcolor: "#f1f6fb", width: 130 }}>
                    주제
                  </TableCell>
                  <TableCell>{cornell.topic}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell variant="head" sx={{ bgcolor: "#f1f6fb" }}>
                    전체 흐름 요약
                  </TableCell>
                  <TableCell>
                    <Typography><strong>도입:</strong> {cornell.flow.도입}</Typography>
                    <Typography><strong>전개:</strong> {cornell.flow.전개}</Typography>
                    <Typography><strong>결말:</strong> {cornell.flow.결말}</Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell variant="head" sx={{ bgcolor: "#f1f6fb" }}>
                    전략 요소
                  </TableCell>
                  <TableCell>
                    <Table size="small">
                      <TableBody>
                        {cornell.keyStrategies.map(([title, detail], idx) => (
                          <TableRow key={idx}>
                            <TableCell sx={{ fontWeight: 600 }}>{title}</TableCell>
                            <TableCell>{detail}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell variant="head" sx={{ bgcolor: "#f1f6fb" }}>
                    핵심 메시지 해석
                  </TableCell>
                  <TableCell>{cornell.message}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell variant="head" sx={{ bgcolor: "#f1f6fb" }}>
                    배워야 할 내용
                  </TableCell>
                  <TableCell>
                    <ul>
                      {cornell.learnings.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>

          <Box sx={{ width: 1, display: "flex", justifyContent: "center", mt: 3 }}>
            <Button onClick={() => navigate("/quizgen")}>퀴즈 생성하기</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
