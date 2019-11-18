import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jailsonk8-nkp2.localhost.run',
});

export default api;