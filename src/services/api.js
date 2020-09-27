import axios from "axios";

const api = axios.create({
  baseURL: "https://disciplina-petshop.herokuapp.com/",
});

export default api;
