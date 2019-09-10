import * as React from 'react';
import QuickAdd from './QuickAdd';
import SearchBar from './SearchBar';

export default function QuickBar(props) {
    return (
        <div className="quick-bar">
            <SearchBar />
            <QuickAdd />
        </div>
    );
};