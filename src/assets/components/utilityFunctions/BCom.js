import axios from "axios";
const BaseUrl = "http://localhost:3000/api/tools";
function getAll() {
  return axios.get(`${BaseUrl}`);
}
export { getAll };
