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
import { useLocation, useNavigate } from "react-router-dom";

// 공통 컴포넌트
import MainToolBar from "./MainToolBar";
import MainSearchBar from "./MainSearchBar";

const causeEffect = [
    {
        cause: "단순히 엄마에게 '치킨 시켜줘'라고 요청함",
        effect: "거절당하거나 설득력이 약함, 치킨 주문 실패",
    },
    {
        cause: "건강과 영양(콜라겐 등)을 명분으로 활용",
        effect: "엄마가 고기 섭취에 긍정적으로 반응, 치킨 주문이 자연스러워짐",
    },
    {
        cause: "형제자매 간 갈등을 유도",
        effect: "갈등 후 화해의 명분으로 치킨을 시켜달라고 요청 가능",
    },
    {
        cause: "부모님의 감정 상태를 파악하여 기분 좋을 때 요청",
        effect: "치킨 주문 허락 가능성 증가",
    },
    {
        cause: "통닭과 치킨의 차이를 이해하고 주도권을 잡음",
        effect: "가족 내에서 치킨 먹는 주도권 확보, 먹는 방식도 원활해짐",
    },
    {
        cause: "대화 주제를 전환하거나 시선을 분산시키는 전략 사용",
        effect: "가족들이 치킨 먹는 것에 집중하며 분위기 좋아짐",
    },
];

export default function CauseEffectSummaryPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const userPrompt = location.state?.prompt;

    return (
        <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f7fb" }}>
            {/* 좌측 사이드바 */}
            <MainToolBar add="Summarization" />

            {/* 우측 메인 영역 */}
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                {/* 상단 검색 바 */}
                <MainSearchBar />

                {/* 본문 내용 */}
                <Box sx={{ flexGrow: 1, p: 4 }}>
                    <Paper sx={{ p: 3, borderRadius: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <IconButton onClick={() => navigate(-1)}>
                                <ArrowBackIosNewIcon />
                            </IconButton>
                            <Typography variant="h6" sx={{ ml: 1 }}>
                                인과 관계 요약 결과
                            </Typography>
                        </Box>

                        {userPrompt && (
                            <Typography variant="subtitle1" sx={{ mb: 2, color: "#6d71f5" }}>
                                요청: <span style={{ fontWeight: 500 }}>{userPrompt}</span>
                            </Typography>
                        )}

                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell
                                        align="center"
                                        sx={{ bgcolor: "#f3f7fb", width: 210, fontWeight: 700 }}
                                    >
                                        원인 (Cause)
                                    </TableCell>
                                    <TableCell align="center" sx={{ bgcolor: "#f3f7fb", fontWeight: 700 }}>
                                        결과 (Effect)
                                    </TableCell>
                                </TableRow>

                                {causeEffect.map((pair, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell>{pair.cause}</TableCell>
                                        <TableCell>{pair.effect}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}