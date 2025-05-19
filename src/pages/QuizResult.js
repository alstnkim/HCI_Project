import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import PersonIcon from "@mui/icons-material/Person";
import MainToolBar from "./MainToolBar";
import MainSearchBar from "./MainSearchBar";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const COLORS = ["#e0e0e0", "#2c3e94"]; // 틀림, 맞음 색상

export default function QuizResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const correct = Number(queryParams.get("score"));
  const total = Number(queryParams.get("total"));
  const incorrect = total - correct;
  const data = [
    { name: "Not correct", value: incorrect },
    { name: "Correct", value: correct },
  ];
  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f9fbff" }}>
      <MainToolBar add="Quiz" />

      <Box sx={{ flexGrow: 1 }}>
        <MainSearchBar />
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 3,
            border: "1px solid #ddd",
            maxWidth: 600,
            mx: "auto",
            mt: 5,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight={600} mb={1}>
            7주차 1차시 HCI
          </Typography>

          <Typography variant="h4" fontWeight={700} mt={5} mb={2}>
            퀴즈 결과
          </Typography>

          {/* 도넛 차트 */}
          <Box sx={{ position: "relative", display: "inline-block", my: 3 }}>
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={90}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>

            {/* 차트 중앙 텍스트 */}
            <Box
              sx={{
                position: "absolute",
                top: "53%",
                left: "53%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <PersonIcon sx={{ fontSize: 30, color: "#2c3e94" }} />
              <Typography fontSize="20px" fontWeight={700}>
                {correct}/{total}
              </Typography>
            </Box>
          </Box>

          {/* 서브 텍스트 */}
          <Typography color="text.secondary" fontSize="0.9rem" mb={4}>
            <span style={{ color: "#2c3e94", fontWeight: 600 }}>{correct}</span>{" "}
            correct ・ <span style={{ color: "#999" }}>{incorrect}</span> not
            correct
          </Typography>

          {/* 저장 버튼 */}
          <Button
            variant="contained"
            sx={{
              borderRadius: 999,
              px: 4,
              py: 1.5,
              backgroundColor: "#000",
              "&:hover": { backgroundColor: "#333" },
            }}
            onClick={() => {
              navigate("/quiz");
            }}
          >
            다시 보기
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
