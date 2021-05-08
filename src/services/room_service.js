import axios from 'axios';
import { API_URL } from '../config';

function get_rooms(page) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/properties?page=${page}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}

function get_filters() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/properties/filters`)
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
  get_filters,
};
