import React from "react";
import {
    Box,
    Paper,
    Typography,
    Button,
    IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

// 공통 레이아웃 컴포넌트
import MainToolBar from "./MainToolBar";
import MainSearchBar from "./MainSearchBar";

const summary = {
    summary: `이 영상은 치킨을 먹기 위한 ‘명분’을 만드는 다양한 전략을 설명합니다. 건강과 영양(콜라겐 등)을 강조해 자연스럽게 치킨 주문을 유도하고, 가족 간 갈등 후 화해의 상징으로 치킨을 활용하는 방법, 대화 주제 전환법, 주도권 잡기 등 실용적인 팁이 포함됩니다.`,
    highlights: [
        "치킨은 곧 화해다.",
        "엄마 입에서 먼저 고기 얘기가 나오게 만들어야 한다.",
        "콜라겐이라는 단어가 고기 얘기를 가장 고기 냄새 나지 않게 할 수 있는 방법이다.",
        "주도권을 네가 잡아야 한다.",
        "오늘 너네 집에 가서 해봐. 지리쌤이 콜라겐 먹어야 된다 그러는데.",
    ],
};

export default function CoreSummarization() {
    const navigate = useNavigate();

    const handlePDF = () => {
        const doc = new jsPDF();
        doc.text("요약 & 핵심 문장", 10, 20);
        doc.text("요약:", 10, 30);
        doc.text(summary.summary, 10, 40);
        doc.text("핵심 문장:", 10, 60);
        summary.highlights.forEach((h, i) => {
            doc.text(`- ${h}`, 12, 70 + i * 10);
        });
        doc.save("SummaryHighlight.pdf");
    };

    return (
        <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f7fb" }}>
            {/* 좌측 사이드바 */}
            <MainToolBar add="Summarization" />

            {/* 우측 컨텐츠 영역 */}
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                {/* 상단 검색 바 */}
                <MainSearchBar />

                {/* 요약 콘텐츠 */}
                <Box sx={{ flexGrow: 1, p: 4 }}>
                    <Paper sx={{ p: 3, borderRadius: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <IconButton onClick={() => navigate(-1)}>
                                <ArrowBackIosNewIcon />
                            </IconButton>
                            <Typography variant="h6" sx={{ ml: 1, flex: 1 }}>
                                요약 & 핵심 문장
                            </Typography>
                            <IconButton
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        `${summary.summary}\n\n${summary.highlights.join("\n")}`
                                    );
                                    alert("복사되었습니다!");
                                }}
                            >
                                <ContentCopyOutlinedIcon />
                            </IconButton>
                            <IconButton onClick={handlePDF}>
                                <DownloadIcon />
                            </IconButton>
                        </Box>

                        <Typography variant="subtitle1" fontWeight={600}>간단 요약</Typography>
                        <Typography sx={{ mb: 3 }}>{summary.summary}</Typography>

                        <Typography variant="subtitle1" fontWeight={600}>핵심 문장</Typography>
                        <ul>
                            {summary.highlights.map((h, idx) => (
                                <li key={idx}>
                                    <Typography color="primary" fontWeight={500}>{h}</Typography>
                                </li>
                            ))}
                        </ul>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}