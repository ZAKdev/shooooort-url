import axios from 'axios';

const apiShort = axios.create({
  baseURL: 'https://impraise-shorty.herokuapp.com/',
  withCredentials: false,
  headers: {'Content-Type': 'application/json'}
})

export const getShorten = url =>
  apiShort.post('shorten', {
    url
  })