import axios from "axios";

const baseUrl = "http://localhost:3002";

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/api/posts/all`);
  console.log(response);
  return response.data;
};

export default { getAll };
