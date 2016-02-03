//app/components/App.jsx

import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {notes: [
			{
			  id: uuid.v4(),
			  task: 'Learn Webpack'
			},
			{
			  id: uuid.v4(),
			  task: 'Learn React'
			},
			{
			  id: uuid.v4(),
			  task: 'Do laundry'
			}
		]};
	}
	render() {
		const notes = this.state.notes;

		return (
			<div>
				<button onClick={this.addNote}>+</button>
				<Notes notes={notes} />
				{/*<button className="add-note" onClick={this.addNote}>+</button>
				<Notes notes={notes}
				  onEdit={this.editNote}
				  onDelete={this.deleteNote} />*/}
		  </div>
		);
	}
//helper is outside of the render but it needs to end with a semicolon to function
	addNote = () => {
		//console.log('clicked add');
		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),
				task: 'new task'
			}])
		});
	};





  // deleteNote = (id) => {
  //   this.setState({
  //     notes: this.state.notes.filter(note => note.id !== id)
  //   });
  // };
  // addNote = () => {
  //   this.setState({
  //     notes: this.state.notes.concat([{
  //       id: uuid.v4(),
  //       task: 'New task'
  //     }])
  //   });
  // };
  // editNote = (id, task) => {
  //   const notes = this.state.notes.map(note => {
  //     if(note.id === id && task) {
  //       note.task = task;
  //     }

  //     return note;
  //   });

  //   this.setState({notes});
  // };
}