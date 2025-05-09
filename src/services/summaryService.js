// src/services/summaryService.js
import api from "../api";

/**
 * 저장된 텍스트 ID로 OpenAI 요약을 요청합니다.
 * @param {number} id TextRequest의 DB PK
 * @returns {Promise<{id: number, summary: string}>}
 */
export async function summarizeText(id) {
  const res = await api.post(`/summarize/${id}`);
  return res.data;
}
