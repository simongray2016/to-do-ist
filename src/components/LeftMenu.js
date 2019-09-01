import * as React from 'react';
import Filter from './Filter';

export default function LeftMenu() {
    return (
        <div className="left-menu">
            <Filter
                icon={"fa fa-inbox"}
                name={"Inbox"}
            />
            <Filter
                icon={"fa fa-calendar-check-o"}
                name={"Today"}
            />
            <Filter
                icon={"fa fa-calendar"}
                name={"Next 7 days"}
            />
        </div>
    );
};
