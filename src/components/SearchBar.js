import React from 'react';

export default function SearchBar() {
	return (
		<div className="search-bar"> 
			<i className="fa fa-search"></i>
			<input className="search" type="text" placeholder="Quick Find"/>
		</div>
	);
};