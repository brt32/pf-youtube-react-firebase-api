import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyB-aWQm1a-y-1N40fiioOjgN-dRmw043nM",
  },
});

export default request;
