import React from "react";
import {
    Box,
    Typography,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    LinearProgress,
    Button,
    Paper,
    AppBar,
    Toolbar,
    InputBase,
    IconButton,
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
import { useNavigate } from "react-router-dom";

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

export default function Transcription() {
    const navigate = useNavigate();

    const fileList = [
        "week 7 HCI 수업 녹음본",
        "week 8 HCI 수업 녹음본",
        "week 9 HCI 수업 녹음본",
        "week 7 HCI 수업 녹음본",
        "week 8 HCI 수업 녹음본",
        "week 9 HCI 수업 녹음본",
    ];

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

                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Main
                </Typography>
                <List sx={{ mb: 2 }}>
                    {navMain.map((item) => (
                        <ListItemButton
                            key={item.label}
                            selected={item.label === "Transcription"}
                            sx={{ borderRadius: 1, mb: 1 }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))}
                </List>

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

                <Box sx={{ flexGrow: 1 }} />

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
                <AppBar
                    elevation={0}
                    position="static"
                    sx={{
                        backgroundImage: "linear-gradient(90deg, #8ea4db 0%, #c5d1e8 100%)",
                        py: 1,
                    }}
                >
                    <Toolbar sx={{ gap: 2 }}>
                        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
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
                                <InputBase placeholder="Search Field Text" sx={{ width: "100%" }} />
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

                <Typography variant="h5" fontWeight={600} sx={{ px: 4, py: 3 }}>
                    Transcription
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 4,
                        px: 4,
                        pb: 4,
                    }}
                >
                    {fileList.map((file, index) => (
                        <Box
                            key={index}
                            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                        >
                            <Box
                                sx={{
                                    width: 80,
                                    height: 100,
                                    border: "2px solid black",
                                    borderRadius: 2,
                                }}
                            />
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                {file}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}