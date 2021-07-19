import axios from "axios";

const baseUrl = "http://localhost:3002";

const registerUser = async (user: IUser) => {
  const response = await axios.post(`${baseUrl}/auth/signup`, user);
  return response.data;
};

const loginUser = async (credentials: ILoginCredentials) => {
  const response = await axios.post(`${baseUrl}/auth/login`, credentials)
  console.log('login data', response.data)
  return response.data.token
}

export default { registerUser, loginUser };
