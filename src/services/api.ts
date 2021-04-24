import axios from "axios";

export const api = axios.create({
  baseURL: "https://erudio-api-server-drc.azurewebsites.net/api/",
});
