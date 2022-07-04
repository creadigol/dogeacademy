import http from "./http-common";

const get = (param) => {
  return http.post(param);
};

const post = (param,data) => {
   return http.post(param,data);
}

const Services = {
  get,
  post,
};

export default Services;