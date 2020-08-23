import axios from 'axios'; //importação o axios

const api = axios.create({ //criar uma instancia do axios que vai criar a base
  baseURL: 'http://localhost:3333' //mesma base criada no insominia para fazer as requisições

});

export default api;