import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "859d152433dd4fd38e80bb39f1204dd7", // With this configuration, this key will be includedin the query string of every HTTP request we send to our backend
  },
});
