import React, { useCallback } from "react";
import { Button, Box } from "@mui/material";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import MainToolBar from "./MainToolBar";
import MainSearchBar from "./MainSearchBar";
import { useNavigate } from "react-router-dom";

const initialNodes = [
  {
    id: "1",
    position: { x: 250, y: 0 },
    data: { label: "치킨 먹기 위한 명분과 전략" },
    style: { background: "#e3f2fd", fontWeight: "bold" },
  },
  {
    id: "2",
    position: { x: 100, y: 100 },
    data: { label: "명분의 중요성" },
  },
  {
    id: "3",
    position: { x: 400, y: 100 },
    data: { label: "콜라겐 활용" },
  },
  {
    id: "4",
    position: { x: 100, y: 200 },
    data: { label: "하수: 엄마에게 직접 의존" },
  },
  {
    id: "5",
    position: { x: 300, y: 200 },
    data: { label: "중수: 건강 명분(콜라겐 등)" },
  },
  {
    id: "6",
    position: { x: 600, y: 200 },
    data: { label: "건강 강조로 고기 유도" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e2-5", source: "2", target: "5" },
  { id: "e3-6", source: "3", target: "6" },
];

export default function MindMapFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f7fb" }}>
      <MainToolBar add="Summarization" />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <MainSearchBar />
        <div style={{ height: "70vh", width: "100%" }}>
          <div style={{ height: "70vh", width: "100%" }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
            >
              <MiniMap />
              <Controls />
              <Background color="#aaa" gap={16} />
            </ReactFlow>
          </div>
        </div>
        <Box
          sx={{ width: 1, display: "flex", justifyContent: "center", mt: 3 }}
        >
          <Button onClick={() => navigate("/quizgen")}>퀴즈 생성하기</Button>
        </Box>
      </Box>
    </Box>
  );
}
