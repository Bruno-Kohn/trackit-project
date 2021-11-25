import axios from 'axios';
const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function createHabitReq(body, config) {
  return axios.post(`${URL}/habits`, body, config);
}

function habitsListReq(config) {
  return axios.get(`${URL}/habits`, config);
}

function deleteHabitReq(index, config) {
  return axios.delete(`${URL}/habits/${index}`, config);
}

function loginReq(body) {
  return axios.post(`${URL}/auth/login`, body);
}

function registerUserReq(body) {
  return axios.post(`${URL}/auth/sign-up`, body);
}

function todaysListReq(config) {
  return axios.get(`${URL}/habits/today`, config);
}

function checkReq(index, config) {
  return axios.post(`${URL}/habits/${index}/check`, {}, config);
}

function uncheckReq(index, config) {
  return axios.post(`${URL}/habits/${index}/uncheck`, {}, config);
}

export {
  createHabitReq,
  habitsListReq,
  deleteHabitReq,
  loginReq,
  registerUserReq,
  todaysListReq,
  checkReq,
  uncheckReq,
};
