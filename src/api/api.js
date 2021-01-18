import axios from "axios";

const instance = axios.create({
  baseURL: "https://prozorro.mavinx.com/api/test/"
});
export default instance;
