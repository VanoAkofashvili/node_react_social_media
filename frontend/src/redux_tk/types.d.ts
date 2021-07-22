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
}

interface ILoginCredentials {
  email: string;
  password: string;
}

/** Homepage */

interface IPost {
  id: number;
  content: string;
}
