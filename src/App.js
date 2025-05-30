import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import backgroundImg from "./component/background.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import Home from "./pages/Home";
import Select from "./pages/Select";
import Main from "./pages/Main";
import Summarization from "./pages/Summarization";
import NoteTaking from "./pages/NoteTaking";
import Summarization2 from "./pages/Summarization2";
import ReadyForRecord from "./pages/ReadyForRecord";
import Saved from "./pages/Saved";
import Recording from "./pages/Recording";
import Creating from "./pages/Creating";
import SelectComponent from "./pages/SelectComponent";
import HomeToolBar from "./pages/HomeToolBar";
import CauseEffectPromptPage from "./pages/CauseEffectPromptPage";
import CauseEffectSummaryPage from "./pages/CauseEffectSummaryPage";
import CoreSummarization from "./pages/CoreSummarization";
import Cornell from "./pages/Cornell";
import MindMapFlow from "./pages/MindmapFlow";
import Transcription from "./pages/Transcription";
import Quiz from "./pages/Quiz";
import QuizResult from "./pages/QuizResult";
import QuizGenerating from "./pages/QuizGenerating";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/record" element={<ReadyForRecord />}></Route>
          <Route path="/recording" element={<Recording />}></Route>
          <Route path="/select" element={<Select />}></Route>
          <Route path="/saved" element={<Saved />}></Route>
          <Route path="/summarization" element={<Summarization />}></Route>
          <Route path="/summarization2" element={<Summarization2 />}></Route>
          <Route path="/creating" element={<Creating />}></Route>
          <Route path="/prompt" element={<CauseEffectPromptPage />} />
          <Route path="/result" element={<CauseEffectSummaryPage />} />
          <Route path="/coresummarization" element={<CoreSummarization />} />
          <Route path="/cornell" element={<Cornell />} />
          <Route path="/mindmap" element={<MindMapFlow />} />
          <Route path="/transcription" element={<Transcription />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quizgen" element={<QuizGenerating />} />
          <Route path="/quizresult" element={<QuizResult />} />

          <Route path="/notetaking" element={<NoteTaking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
