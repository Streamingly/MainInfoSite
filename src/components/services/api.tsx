import axios from 'axios';

const API_URL = 'https://api.streamingly.net/v1/video_stream';

export const fetchVideosData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};