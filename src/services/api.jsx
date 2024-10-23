// services/movieService.ts
import axios from 'axios';

const API_URL = 'https://api.streamingly.net/v1';

export const fetchVideosData = async () => {
  try {
    const response = await axios.get(`${API_URL}/video_stream`);
    return response.data;
  } catch (error) {
    console.error('Error fetching latest movies:', error);
    throw error;
  }
};
