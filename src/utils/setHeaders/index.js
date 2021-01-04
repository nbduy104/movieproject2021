import api from "../../api";

const setHeaders = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else if (api.default) {
    delete api.default.headers.common["Authorization"];
  }
};
export default setHeaders;
