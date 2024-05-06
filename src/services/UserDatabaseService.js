import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000'
});

export default {

  list() {
    return http.get('/userDataBase');
  },

  get(id) {
    return http.get(`/userDataBase/${id}`)
  },

  create(user) {
    return http.post(`/userDataBase/`, user);
  },

  update(id, user) {
    return http.put(`/userDataBase/${id}`, user);
  },

  delete(id) {
    return http.delete(`/userDataBase/${id}`);
  }

}