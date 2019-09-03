import * as React from 'react';
import SearchBar from './SearchBar';
import QuickAdd from './QuickAdd';

export default function QuickBar(props) {
    return (
        <div className="quick-bar">
            <SearchBar />
            <QuickAdd />
        </div>
    );
};