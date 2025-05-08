import React from "react";
import backgroundImg from "../component/background.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { flushSync } from "react-dom";
import HomeToolBar from "./HomeToolBar";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <HomeToolBar />
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          <Box
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            마법처럼 당신에게
          </Box>
          <Box sx={{ width: 1, display: "flex", alignItems: "center" }}>
            정리해주는 <Box sx={{ color: "#1976d2", ml: 4 }}>요정</Box>, 요약
            정리!
          </Box>
        </Typography>
        <Box
          sx={{
            mt: 13,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            fontWeight: "500",
            fontSize: "1.5rem",
          }}
        >
          마음에 드는 정리 방법을 골라
          <Box display="flex">
            <Box color={"#C9EAFB"}>요약 정리</Box>를 시작하세요
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
