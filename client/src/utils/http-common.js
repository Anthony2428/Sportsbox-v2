import axios from "axios";

export default axios.create({
  baseURL: window.location.origin,
  headers: {
    "Content-type": "application/json"
  }
});
