interface INote {
  id: number;
  content: string;
  important: boolean;
}

interface NoteState {
  notes: INote[];
}

/** User Register */

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  sex: number;
  password: string;
  dateOfBirth: string;
}

interface RegisterState {
  userIsRegistering: boolean;
  error?: string | null;
}

/** Login */

interface LoginState {
  token: string;
}

/** AUTH */

interface authState {
  userIsRegistering: boolean;
  error?: string | null;
  token: string;
  isLoggedIn: boolean;
  userIsLogging: boolean;
}

interface ILoginCredentials {
  email: string;
  password: string;
}
