import axios from "utils/axios/axios";

const getAll = async () => {
  const response = await axios.get(`/api/posts/all`);
  return response.data.posts;
};

const exportedObj = { getAll}

export default exportedObj;
