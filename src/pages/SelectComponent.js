import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Paper,
} from "@mui/material";

function SelectComponent({ backgroundImg, iconImg, title, description }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: 360,
        height: 482,
      }}
    >
      <Box
        component="img"
        src={backgroundImg}
        alt="배경"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 2,
        }}
      />

      <Box
        component="img"
        src={iconImg}
        alt="노트 아이콘"
        sx={{
          position: "absolute",
          top: "40px",
          left: "60px",
          width: 250,
          height: 250,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "30px", // 아래쪽 여백
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffffff",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#5a91d4", // 파란 강조 색
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.9rem",
            fontWeight: 400,
            color: "#333",
            wordBreak: "keep-all",
            whiteSpace: "normal",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default SelectComponent;
