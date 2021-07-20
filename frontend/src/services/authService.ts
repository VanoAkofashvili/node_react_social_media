import axios from "axios";

const baseUrl = "http://localhost:3002";

const registerUser = async (user: IUser) => {
  // try {
  //   return response.data;
  // }
  // catch(err) {
  //   console.log(err)
  //   throw new Error(err)
  // }
  const response = axios
    .post(`${baseUrl}/auth/signup`, user)
    .then(res => console.log('res', res))
    .catch((err) => {
      if (err.response) {
        console.log('err', err.response);
      } else {
        console.log('no respnse')
      }
    });
    return response
};

const loginUser = async (credentials: ILoginCredentials) => {
  const response = await axios.post(`${baseUrl}/auth/login`, credentials);
  return response.data.token;
};

export default { registerUser, loginUser };
