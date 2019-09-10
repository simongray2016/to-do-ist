import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

class TaskAction extends Component {
	state = { 
		index: [4, 3, 2, 1],
		openAction: false
	}

	toggle = () => {
		this.setState({openAction: !this.state.openAction});
		this.props.openAction();
	}

	deleteTask = () => {
		this.props.deleteTask(this.props.id);
		this.toggle();

	}

	openEditForm = () => {
		this.props.openEditForm(this.props.index);
		this.toggle()
	}

	changePriority = (e, index) => {
		e.preventDefault();
		this.props.changePriority(this.props.id, index)
		this.toggle();
	}

	render() {
		let { priority } = this.props;
		let { index, openAction } = this.state;
		return (
			<Dropdown isOpen={openAction} toggle={() => this.toggle()}>
				<DropdownToggle
					tag="span"
					className="action-button"
					data-toggle="dropdown"
					aria-expanded={openAction}
				>
					<i className="fa fa-ellipsis-h"></i>
				</DropdownToggle>
				<DropdownMenu className="task-action">
					<div onClick={() => this.openEditForm()}>
						<span><i className="fa fa-pencil icon-label"></i></span>
						<span className="name-label">Edit task</span>
					</div>
					<div className="priority">
						<span>Priority</span>
						<ul>
							{index.map(index => <li key={index}>
								<a href="/"
									className={index === priority ? 'current' : undefined}
									onClick={e => this.changePriority(e, index)}>
									<i className={`fa fa-flag${index === 4 ? '-o' : ''} priority-${index}`}></i>
								</a>
							</li>)}
						</ul>
					</div>
					<div
						onClick={() => this.deleteTask()}
					>
						<span><i className="fa fa-trash-o icon-label"></i></span>
						<span className="name-label">Delete task</span>
					</div>
				</DropdownMenu>
			</Dropdown>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	openEditForm: index => dispatch(actions.openEditForm(index)),
	deleteTask: id => dispatch(actions.deleteTask(id)),
	changePriority: (id, index) => dispatch(actions.changePriority(id, index))
})

export default connect(null, mapDispatchToProps)(TaskAction);