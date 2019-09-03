<<<<<<< HEAD
import React, {useState} from 'react';
import ListResult from './ListResult';
import { connect } from 'react-redux';
import * as actions from '../actions/task';

function SearchBar({ project, querySearch }) {
	const renderResult = list => {
		return (
			list.map((task, index) =>
				<ListResult
					name={task.name}
					key={index}
				/>)
		)
	}

	const onChangeQuerySearch = (query) => {
		querySearch(query.trim().toLowerCase());
	}

	return (
		<div className="search-bar">
			<i className="fa fa-search"></i>
			<input
				onChange={e => onChangeQuerySearch(e.target.value)}
				className="search" type="text" placeholder="Quick Find" />
			<div className="result" >
				<table>
					<tbody>
						{renderResult(project.list)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	project: state.task
});

const mapDispatchToProps  = dispatch => ({
	// querySearch: query => dispatch(actions.querySearch(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
=======
import React from 'react';

export default function SearchBar() {
	return (
		<div className="search-bar"> 
			<i className="fa fa-search"></i>
			<input className="search" type="text" placeholder="Quick Find"/>
		</div>
	);
};
>>>>>>> 21a6486be9769b38dd74b7f4d2da28d9f6b03d90
