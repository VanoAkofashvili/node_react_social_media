interface INote {
    id: number;
    content: string;
    important: boolean;
}

interface NoteState {
    notes: INote[]
}