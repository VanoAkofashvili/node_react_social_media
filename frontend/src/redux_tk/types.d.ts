// loginstate
interface LoginState {
  token: string;
}

/** AUTH */
interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  sex: number;
  password: string;
  dateOfBirth: string;
}

interface authState {
  registerLoading: boolean;
  registerSuccess: boolean;
  errors?: string[] | null;
  token: string;
  loginLoading: boolean;
  loginSuccess: boolean;
  autoLogin: boolean;
}

interface ILoginCredentials {
  email: string;
  password: string;
}

/** Homepage */

interface IPost {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
}

interface homePageState {
  posts: IPost[]
}

interface displayState {
  theme: String | null
}