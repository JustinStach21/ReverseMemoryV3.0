import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000'
});

export default {

    list() {
        return http.get('/itemDataBase');
    },
    
    get(id) {
        return http.get(`/itemDataBase/${id}`)
    },

    getItemByName(itemName){
        return http.get(`/itemDataBase/${itemName}`)
    }

}
