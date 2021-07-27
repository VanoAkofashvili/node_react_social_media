import axios from "utils/axios/axios";

const getAll = async () => {
  const response = await axios.get(`/api/posts/all`);
  // console.log(response);
  return response.data.posts;
};

export default { getAll };
