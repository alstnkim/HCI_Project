import React from "react";
import backgroundImg from "../component/background.png";
import note from "../component/note.png";
import select2 from "../component/select2.png";
import select3 from "../component/select3.png";
import select4 from "../component/select4.png";
import select4back from "../component/select4back.png";
import select3back from "../component/select3back.png";
import select2back from "../component/select2back.png";
import noteback from "../component/noteback.png";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Paper,
} from "@mui/material";
import { flushSync } from "react-dom";
import HomeToolBar from "./HomeToolBar";
import SelectComponent from "./SelectComponent";

function Select() {
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
          display: "flex",
          mt: 20,
          gap: 7,
          width: 1,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <SelectComponent
          backgroundImg={noteback}
          iconImg={note}
          title="요약 & 핵심 문장"
          description="간단한 요약과 핵심 문장을 하이라이트 해주는 기본 템플릿"
        />{" "}
        <SelectComponent
          backgroundImg={select2back}
          iconImg={select2}
          title=" 전개전략형 요약 "
          description=" 전개전략형 요약를 기반으로 제작된 템플릿"
        />{" "}
        <SelectComponent
          backgroundImg={select3back}
          iconImg={select3}
          title="마인드 맵"
          description="마인드 맵 기법을 사용한 템플릿"
        />{" "}
        <SelectComponent
          backgroundImg={select4back}
          iconImg={select4}
          title="나만의 요약 스타일 생성"
          description="나만의 DIY 요약 템플릿"
        />
      </Box>
      <Box sx={{ width: 1, display: "flex", justifyContent: "center", mt: 5 }}>
        <Link to="/record">
          <Button
            variant="contained"
            color="#ffffff"
            sx={{
              color: "#ffffff",
              backgroundColor: "#000000",
              width: 150,
              borderRadius: "999px",
              textTransform: "none",
            }}
          >
            요약 시작하기
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default Select;
