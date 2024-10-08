import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

axios.defaults.headers['Authorization'] =
  'Client-ID 149fHsJuToxkft83iV2wS9NKv1iFwgfCI6VCmPCZnl4';

export const getPhotosByName = async (name, page = 1) => {
  const response = await axios.get(`/search/photos?query=${name}&page=${page}`);
  return response.data;
};
