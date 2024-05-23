import axios from 'axios';

const http = axios.create({
  baseURL: 'https://justinstach21.github.io/ReverseMemoryDataBase/'
});

export default {

  list() {
    return http.get('/userDataBase.json');
  },

  get(id) {
    return http.get(`/userDataBase.json/${id}`)
  },

  create(user) {
    return http.post(`/userDataBase.json`, user);
  },

  update(id, user) {
    return http.put(`/userDataBase.json/${id}`, user);
  },

  delete(id) {
    return http.delete(`/userDataBase.json/${id}`);
  }

}