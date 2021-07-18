import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import noteService from '../../../services/notes'

const initialState: NoteState = {
  notes: [],
};

export const getAllNotes = createAsyncThunk("notes/getAllNotes", async () => {
    const response = await noteService.getAll()
    return response
})

export const addNote = createAsyncThunk('notes/addNote', async (note: INote) => {
    const response = await noteService.addNote(note)
    console.log(response)
    return response
})

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: builder => {
      builder
        .addCase(getAllNotes.fulfilled, (state, action: PayloadAction<INote[]>) => {
            state.notes = action.payload
        })
        .addCase(addNote.fulfilled, (state, action: PayloadAction<INote>) => {
            state.notes.push(action.payload)
        })
        .addCase(addNote.rejected, (state, action) => {console.log(action)})
  }
});

export default notesSlice.reducer