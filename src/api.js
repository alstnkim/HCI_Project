// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',  // 백엔드 주소/포트 확인!
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
