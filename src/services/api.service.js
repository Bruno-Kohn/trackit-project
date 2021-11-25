import axios from 'axios';
import bearerToken from './bearer';
const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function createHabitReq(body, token) {
  return axios.post(`${URL}/habits`, body, bearerToken(token));
}

function habitsListReq(token) {
  return axios.get(`${URL}/habits`, bearerToken(token));
}

function deleteHabitReq(index, token) {
  return axios.delete(`${URL}/habits/${index}`, bearerToken(token));
}

function loginReq(body) {
  return axios.post(`${URL}/auth/login`, body);
}

function registerUserReq(body) {
  return axios.post(`${URL}/auth/sign-up`, body);
}

function todaysListReq(token) {
  return axios.get(`${URL}/habits/today`, bearerToken(token));
}

function checkReq(index, token) {
  return axios.post(`${URL}/habits/${index}/check`, {}, bearerToken(token));
}

function uncheckReq(index, token) {
  return axios.post(`${URL}/habits/${index}/uncheck`, {}, bearerToken(token));
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
