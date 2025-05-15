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
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

// 공통 레이아웃 컴포넌트
import MainToolBar from "./MainToolBar";
import MainSearchBar from "./MainSearchBar";

const cornell = {
    topic: "치킨 먹기 위한 명분과 전략",
    mainIdeas: [
        "건강, 영양 강조로 명분 만들기",
        "가족 갈등 후 화해 수단 활용",
        "심리적 접근과 대화 기술 활용",
    ],
    details: [
        "- 하수: 엄마에게 직접 의존 (\"엄마 힘드니까 시켜주세요\")",
        "- 중수: 콜라겐, 단백질 등 건강 이유 활용",
        "- 콜라겐 키워드로 고기 이야기 자연스럽게 유도",
        "- 통닭과 치킨 차이를 활용, 주도권 잡기",
        "- 형제자매 갈등 후 화해 수단으로 치킨",
        "- 부모 감정 역이용, 대화 주제 전환법",
    ],
    summary:
        "치킨 주문은 단순 요청보다 건강 명분을 만들고, 갈등 후 화해 수단으로 활용하는 것이 효과적. 주도권을 잡고 가족 심리 고려가 중요.",
    question: "가족별 최적 명분을 어떻게 만들까? 치킨 화해가 가족관계에 미치는 영향은?",
};

export default function CornellNotePage() {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f7fb" }}>
            {/* 좌측 메뉴바 */}
            <MainToolBar add="Summarization" />

            {/* 우측 본문 레이아웃 */}
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                {/* 상단 AppBar */}
                <MainSearchBar />

                {/* 컨텐츠 */}
                <Box sx={{ flexGrow: 1, p: 4 }}>
                    <Paper sx={{ p: 3, borderRadius: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <IconButton onClick={() => navigate(-1)}>
                                <ArrowBackIosNewIcon />
                            </IconButton>
                            <Typography variant="h6" sx={{ ml: 1 }}>
                                코넬 노트 요약
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
                                        주요 아이디어
                                    </TableCell>
                                    <TableCell>
                                        <ul>
                                            {cornell.mainIdeas.map((idea, i) => (
                                                <li key={i}>{idea}</li>
                                            ))}
                                        </ul>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell variant="head" sx={{ bgcolor: "#f1f6fb" }}>
                                        세부 내용
                                    </TableCell>
                                    <TableCell>
                                        <ul>
                                            {cornell.details.map((d, i) => (
                                                <li key={i}>{d}</li>
                                            ))}
                                        </ul>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell variant="head" sx={{ bgcolor: "#f1f6fb" }}>
                                        요약/결론
                                    </TableCell>
                                    <TableCell>{cornell.summary}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell variant="head" sx={{ bgcolor: "#f1f6fb" }}>
                                        질문/후속 과제
                                    </TableCell>
                                    <TableCell>{cornell.question}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}