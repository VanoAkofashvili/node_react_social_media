import React from "react";

import { useAppDispatch, useAppSelector } from "./app/hook";

import {
  increment,
  decrement,
  incByAmount,
} from "./features/counter/counterSlice";

import { addNote, getAllNotes } from "./features/notes/notesSlice";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const notes = useAppSelector((state) => state.notes.notes);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getAllNotes());
}, [dispatch]);
console.log('notes', notes)
console.log('function', addNote)
  return (
    <div>
      <h1>Counter is {count}</h1>
      <button onClick={(e) => dispatch(increment())}>add</button>
      <button onClick={(e) => dispatch(decrement())}>minus</button>
      <button onClick={(e) => dispatch(incByAmount(3))}>+3</button>
      <div>
        <h1>Notes</h1>
        <button onClick={(e) => dispatch(getAllNotes())}>fetchNotes</button>
        {notes.map((note, i) => (
          <li key={i}>{note.content}</li>
        ))}
      </div>
      <div>
          <h1>add Note</h1>
          <button onClick={e => dispatch(addNote({id: 4, content: "12",  important: true}))}>add</button>
      </div>
    </div>
  );
}
