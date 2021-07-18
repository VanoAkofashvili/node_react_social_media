import axios from "axios";

const baseUrl = "http://localhost:3002";

const registerUser = async (user: IUser) => {
  const response = await axios.post(`${baseUrl}/auth/signup`, user);
  return response.data;
};

export default { registerUser };
