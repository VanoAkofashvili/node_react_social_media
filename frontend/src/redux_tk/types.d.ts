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
    dataOfBirth: string
}

interface RegisterState {
    userRegistered: boolean;
    error?: string
}