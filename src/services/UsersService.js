import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000'
});

export default {

  getUsers() {
    return http.get('/users');
  },

  getUser(id) {
    return http.get(`/users/${id}`)
  },

  create(user) {
    return http.post(`/users/`, user);
  },

  update(id, user) {
    return http.put(`/users/${id}`, user);
  },

  delete(id) {
    return http.delete(`/users/${id}`);
  }

}
