import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
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
    Grid,
    Paper,
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
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

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

const files = new Array(11).fill("week 7 HCI 요약본");

export default function NoteTaking() {
    return (
        <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f7f9fc" }}>
            {/* Sidebar */}
            <Box
                sx={{
                    width: 220,
                    px: 2,
                    py: 3,
                    display: "flex",
                    flexDirection: "column",
                    background: "linear-gradient(180deg, #8da4db 0%, #ffffff 100%)",
                }}
            >
                <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
                    YOJEONG
                </Typography>

                {/* Main Section */}
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Main
                </Typography>
                <List sx={{ mb: 2 }}>
                    {navMain.map((item) => (
                        <ListItemButton
                            key={item.label}
                            selected={item.label === "Summarization"}
                            sx={{ borderRadius: 1, mb: 1 }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))}
                </List>

                {/* Other Section */}
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Other
                </Typography>
                <List>
                    {navOther.map((item) => (
                        <ListItemButton key={item.label} sx={{ borderRadius: 1, mb: 1 }}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))}
                </List>

                {/* Spacer */}
                <Box sx={{ flexGrow: 1 }} />

                {/* Subscription Section */}
                <Typography variant="caption" color="text.secondary">
                    Subscription
                </Typography>
                <LinearProgress
                    variant="determinate"
                    value={63}
                    sx={{ height: 6, borderRadius: 5, my: 1 }}
                />
                <Typography variant="caption" sx={{ mb: 1 }}>
                    19 summaries used of 30
                </Typography>
                <Button
                    variant="outlined"
                    size="small"
                    sx={{ textTransform: "none", borderRadius: 2 }}
                >
                    Upgrade
                </Button>
            </Box>

            {/* Main Content */}
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                {/* Top Bar */}
                <AppBar
                    elevation={0}
                    position="static"
                    sx={{
                        backgroundImage: "linear-gradient(90deg, #8ea4db 0%, #c5d1e8 100%)",
                        py: 1,
                    }}
                >
                    <Toolbar sx={{ gap: 2 }}>
                        <Box
                            sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
                        >
                            <Box
                                sx={{
                                    width: "60%",
                                    bgcolor: "white",
                                    borderRadius: 20,
                                    px: 2,
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <InputBase
                                    placeholder="Search Field Text"
                                    sx={{ width: "100%" }}
                                />
                            </Box>
                        </Box>
                        <IconButton>
                            <NotificationsNoneOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <SettingsOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {/* Summary Title Card */}
                <Paper elevation={1} sx={{ m: 3, p: 2, borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <IconButton size="small">
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="h6" fontWeight={600}>7주차 1차시 HCI</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", color: "text.secondary", gap: 0.5 }}>
                            <CalendarTodayOutlinedIcon fontSize="small" />
                            <Typography variant="body2">2025.04.10</Typography>
                        </Box>

                    </Box>
                </Paper>

                {/* Summary Content Card */}
                <Paper elevation={0} sx={{ mx: 3, px: 4, py: 3, flexGrow: 1, borderRadius: 3 }}>
                    {/* 아이콘을 오른쪽 상단으로 정렬 */}
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
                        <IconButton><EditOutlinedIcon /></IconButton>
                        <IconButton><ContentCopyOutlinedIcon /></IconButton>
                    </Box>

                    <Typography variant="subtitle1" fontWeight={600}>1. 사용자 중심 디자인 (User-Centered Design, UCD)</Typography>
                    <Typography variant="body1" sx={{ mt: 2, whiteSpace: "pre-line" }}>
                        1-1. 개념 정의{'\n'}
                        • 사용자의 요구, 목적, 특성을 중심으로 시스템이나 제품을 설계하는 방법론{'\n'}
                        • 인간 중심 접근 방식 (Human-Centered Approach)의 핵심{'\n'}
                        • 목표: 사용자 경험(UX) 향상{'\n\n'}
                        1-2. 주요 원칙 (ISO 9241-210 기준){'\n'}
                        • 사용자는 디자인 과정 전반에 지속적으로 참여해야 함{'\n'}
                        • 디자인은 사용자 요구에 기반하여 이뤄져야 함{'\n'}
                        • 반복적인 설계를 통해 점진적으로 완성도를 높임{'\n'}
                        • 다학제적 팀이 협력하여 개발 진행{'\n\n'}
                        1-3. UCD 프로세스 단계{'\n'}
                        1. 사용자 요구 조사: 인터뷰, 설문조사, 관찰 등으로 정보 수집{'\n'}
                        2. 요구사항 분석: 페르소나, 시나리오, 유즈케이스 작성{'\n'}
                        3. 프로토타입 설계: 와이어프레임, 목업 등 시각적 모델 생성{'\n'}
                        4. 사용자 테스트: 실제 사용자 피드백을 바탕으로 개선
                    </Typography>

                    <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
                        <Button variant="outlined" sx={{ borderRadius: 10 }}>Regenerate</Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}
