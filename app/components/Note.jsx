//app/components/Note.jsx

import React from 'react';

export default class Note extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			editing: false
		};
	}

	render() {
		// Render the component differently based on state.
		if (this.state.editing) {
			return this.renderEdit();
		}

		return this.renderNote();
	}

	renderNote = () => {
		const onDelete = this.props.onDelete;
		return (
			<div onClick={this.edit}>
				<span className="task">{this.props.task}</span>
				{onDelete ? this.renderDelete() : null}
			</div>
		);
	};

	renderEdit = () => {
		return (
			<input type="text" ref={(e) => e ? e.selectionStart = this.props.task.length : null} 
				autoFocus="true" 
				defaultValue={this.props.task} 
				onBlur={this.finishEdit} 
				onKeyPress={this.checkEnter} />
		);
	};

//getting error with this function
//Warning: setState(...): Cannot update during an existing state transition 
//(such as within `render`). 
//Render methods should be a pure function of props and state.
	edit = () => {
		this.setState({
			editing: true
		});
	};

	checkEnter = (e) => {
		if (e.key === 'Enter') {
			console.log('clicked enter');
			this.finishEdit(e);
		}
	};

	finishEdit = (e) => {
		const value = e.target.value;
		console.log('value: ' + value);
		if (this.props.onEdit && value.trim()) {
			this.props.onEdit(value);
			this.setState({
				editing: false
			});
		}
	};

	renderDelete = () => {
		return <button className="delete-note" onClick={this.props.onDelete}>x</button>
	};
}

{/*

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }
  render() {
    if(this.state.editing) {
      return this.renderEdit();
    }

    return this.renderNote();
  }
  renderEdit = () => {
    return <input type="text"
      ref={
        (e) => e ? e.selectionStart = this.props.task.length : null
      }
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };
  renderDelete = () => {
    return <button
      className="delete-note"
      onClick={this.props.onDelete}>x</button>;
  };
  renderNote = () => {
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        <span className="task">{this.props.task}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
    );
  };
  edit = () => {
    this.setState({
      editing: true
    });
  };
  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };
  finishEdit = (e) => {
    const value = e.target.value;

    if(this.props.onEdit && value.trim()) {
      this.props.onEdit(value);

      // Exit edit mode.
      this.setState({
        editing: false
      });
    }
  };
}

 */}