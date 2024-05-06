import axios from "axios";

export const $api = axios.create({
  baseURL: "https://no23.lavina.tech",
});
