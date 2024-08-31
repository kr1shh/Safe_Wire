import axios from "axios";
const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/",
})

instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
export { instance }


