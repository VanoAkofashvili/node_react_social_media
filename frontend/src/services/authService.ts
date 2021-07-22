import axios from "axios";

const baseUrl = "http://localhost:3002";

const registerUser = async (user: IUser) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, user);
    return response.data;
  } catch (error) {
    console.log("error", error.response.data)
    throw error.response.data
  }
};

const loginUser = async (credentials: ILoginCredentials) => {
  const response = await axios.post(`${baseUrl}/auth/login`, credentials);
  return response.data.token;
};

export default { registerUser, loginUser };