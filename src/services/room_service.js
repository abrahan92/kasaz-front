import axios from 'axios';
import { API_URL } from '../config';

function get_rooms() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/properties`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}

export const roomService = {
  get_rooms,
};
