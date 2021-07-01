import axios from 'axios';

export const ApiService = axios.create({
  baseURL: 'https://randomuser.me/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getUser() {
  try {
    const response = await ApiService.get('/?results=1');
    return response?.data?.results[0];
  } catch (err) {
    console.log(err, 'Get User');
  }
}
