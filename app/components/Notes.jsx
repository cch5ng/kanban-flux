//app/components/Notes.jsx

import React from 'react';
import Note from './Note.jsx';

//this componetent needs to get the notes property from the parent
export default ({notes, onEdit}) => {
	return (
		<ul>{notes.map((note) =>
			<li key={note.id}>
				<Note task={note.task} onEdit={onEdit.bind(null, note.id)} />
			</li>
			)}
		</ul>
	)
}

{/*
export default ({notes, onEdit, onDelete}) => {
  return (
    <ul className="notes">{notes.map(note =>
      <li className="note" key={note.id}>
        <Note
          task={note.task}
          onEdit={onEdit.bind(null, note.id)}
          onDelete={onDelete.bind(null, note.id)} />
      </li>
    )}</ul>
  );
}
*/}