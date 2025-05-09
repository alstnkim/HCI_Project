// 음성파일 → Daglo API → 텍스트 저장
import api from '../api';

export async function uploadAudioFile(file) {
  const formData = new FormData();
  formData.append('file', file);

  const res = await api.post(
    '/text/upload-audio',
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' }}
  );
  // { id: number, text: string }
  return res.data;
}
