import React from "react";
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

function App() {
  return (
    <div>
      <Summarization />
    </div>
  );
}

export default App;
