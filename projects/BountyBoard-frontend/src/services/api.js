import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});

export const registerUser = async (userData) => {
  userData = {
    ...userData,
    rating: 0,
    num_of_rating : 0
  }
  const response = await API.post('register/', userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await API.post('login/', userData);
  const token = response.data.token;
  if (token) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('username', userData.username)
  }
  return response.data;
};

export const logoutUser = async () => {
  const token = localStorage.getItem('authToken');
  const response = await API.post('logout/', {}, {
    headers: {
      Authorization: `Token ${token}`
    }
  });
  if (response.status === 200) {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
  }
  return response.data;
};
