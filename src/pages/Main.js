import React from "react";
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
import Recording from "./Recording";
import mainbackground from "../component/mainbackground.png";

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

export default function Main() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
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
              selected={item.label === "Home"}
              sx={{
                borderRadius: 1,
                mb: 1,
              }}
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
          position="static"
          sx={{
            backgroundColor: "transparent",
            background: "linear-gradient(90deg, #8ea4db 0%, #c5d1e8 100%)",

            py: 1,
          }}
        >
          <Toolbar sx={{ gap: 2 }}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
              }}
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

        {/* Content Area */}
        <Recording />
      </Box>
    </Box>
  );
}
