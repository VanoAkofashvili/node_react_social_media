interface INote {
    id: number;
    content: string;
    important: boolean;
}

interface NoteState {
    notes: INote[]
}

/** User Register */

interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    sex: number,
    password: string,
    dateOfBirth: string
}

interface RegisterState {
    userRegistered: boolean;
    error?: string | null
}

/** Login */

interface ILoginCredentials {
    email: string;
    password: string;
}

interface LoginState {
    token: string
}

/** AUTH */

interface authState {
    userRegistered: boolean;
    error?: string | null;
    token: string
}