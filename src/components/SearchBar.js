import React, { useState } from 'react';
import ListResult from './ListResult';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function SearchBar({ listResult, querySearch }) {
	const [visible, setVisible] = useState(0);

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
				onFocus={() => setVisible(1)}
				onBlur={() => setVisible(0)}
				className="search" type="text" placeholder="Quick Find" />
			<div className={!visible ? "result" : "result result-visible"}>
				<table>
					<tbody>
						{renderResult(listResult)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	listResult: state.taskReducer.listResult
});

const mapDispatchToProps = dispatch => ({
	querySearch: query => dispatch(actions.querySearch(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
