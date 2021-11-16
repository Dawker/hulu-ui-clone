import axios from 'axios';

// Create an axios instance
const instance = axios.create(
  { baseURL: "https://api.themoviedb.org/3", }
)

export default instance;