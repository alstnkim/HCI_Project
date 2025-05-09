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
import { Link } from "react-router-dom";

function HomeToolBar() {
  return (
    <Box position="static">
      <Toolbar sx={{ m: 2 }}>
        <Box display="flex" justifyContent="space-between" sx={{ width: 1 }}>
          <Box display="flex" gap={1} justifyContent="center">
            <Typography
              variant="h6"
              sx={{
                mr: 10,
                ml: 5,
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#3F93BF",
              }}
            >
              YOJEONG
            </Typography>
            <Button
              variant="contained"
              color="#ffffff"
              sx={{
                borderColor: "#000000",
                border: 2,
                borderRadius: "999px",
                textTransform: "none",
              }}
            >
              Home
            </Button>
            <Button
              variant="contained"
              color="#ffffff"
              sx={{
                borderColor: "#000000",
                border: 2,
                borderRadius: "999px",
                textTransform: "none",
              }}
            >
              사용 가이드
            </Button>
            <Button
              variant="contained"
              color="#ffffff"
              sx={{
                borderColor: "#000000",
                border: 2,
                borderRadius: "999px",
                textTransform: "none",
              }}
            >
              요금제
            </Button>
            <Button
              variant="contained"
              color="#ffffff"
              sx={{
                borderColor: "#000000",
                border: 2,
                borderRadius: "999px",
                textTransform: "none",
              }}
            >
              Contact us
            </Button>
          </Box>
          <Box display="flex" gap={1}>
            <Button
              variant="contained"
              color="#ffffff"
              sx={{
                borderColor: "#000000",
                border: 2,
                width: 150,
                height: 60,
                borderRadius: "999px",
                textTransform: "none",
              }}
            >
              Sign in
            </Button>
            <Link to="/select">
              <Button
                variant="contained"
                color="#ffffff"
                sx={{
                  color: "#ffffff",
                  backgroundColor: "#000000",
                  width: 150,
                  height: 60,
                  borderRadius: "999px",
                  textTransform: "none",
                }}
              >
                Get Start
              </Button>
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
}

export default HomeToolBar;
