import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

class TaskAction extends Component {
	state = { index: [4, 3, 2, 1] }

	container = React.createRef();

	componentDidMount() {
		let container = this.container;
		let props = this.props;
		document.addEventListener("mousedown", function handleClick(e) {
			if (container.current && !container.current.contains(e.target)) {
				props.closeTaskAction();
				document.removeEventListener("mousedown", handleClick)
			}
		});
	}

	deleteTask = () => {
		this.props.deleteTask(this.props.id);
		this.props.closeTaskAction();
	}

	openEditForm = () => {
		this.props.openEditForm(this.props.index);
		this.props.closeTaskAction();
	}

	changePriority = (e, index) => {
		e.preventDefault();
		this.props.changePriority(this.props.id, index)
		this.props.closeTaskAction();
	}

	render() {
		let { id, priority } = this.props;
		let { index } = this.state;
		return (
			<div ref={this.container} className="task-action">
				<table>
					<tbody>
						<tr>
							<td onClick={() => this.openEditForm()}>
								<span><i className="fa fa-pencil icon-label"></i></span>
								<span className="name-label">Edit task</span>
							</td>
						</tr>
						<tr>
							<td>
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
							</td>
						</tr>
						<tr>
							<td
								onClick={() => this.deleteTask()}
							>
								<span><i className="fa fa-trash-o icon-label"></i></span>
								<span className="name-label">Delete task</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	openEditForm: index => dispatch(actions.openEditForm(index)),
	closeTaskAction: () => dispatch(actions.closeTaskAction()),
	deleteTask: id => dispatch(actions.deleteTask(id)),
	changePriority: (id, index) => dispatch(actions.changePriority(id, index))
})

export default connect(null, mapDispatchToProps)(TaskAction);