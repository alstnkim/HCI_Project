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

function App() {
  return (
    <div>
      <NoteTaking />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
