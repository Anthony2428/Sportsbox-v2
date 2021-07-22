import axios from "axios";

export default axios.create({
  baseURL: "https://shrouded-hollows-93454.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
