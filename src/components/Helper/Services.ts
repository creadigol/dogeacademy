import axios from "axios";

const http = axios.create({
  baseURL: "https://thepicab.com/dognft/API/v1/",
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    // 'Content-Type': 'application/json',
    "Authorization":"Basic YWRtaW46MTIzNA==",
    "App-Secret-Key":"Mn2fKZG4M1170jDlVn6lOFTN6OE27f6UO99n9QDV",
    "Authorization-Token":"eyJ0eXA1iOi0JKV1QiL8CJhb5GciTWvLUzI1NiJ9IiRk2YXRh8Ig",
    // 'Access-Control-Allow-Origin': '*', 
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
  // auth:{
    // username:"admin",
    // password:"1234"
  // }
});


const get = (param:any) => {
    return http.post(param);
  };
  
const post = (param:any,data:any = null) => {
    return http.post(param,data);
}


const Services = {   
    get,
    post
};
    
export default Services;
  