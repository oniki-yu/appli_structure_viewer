import React from "react";

import EntryData from './EntryData';

export default class Entry extends React.Component {
    render() {
        const { data } = this.props;
        const entries = data.map((data, key) => {
            return (
                <EntryData data={data} key={key}  />
            )
        });
        return (
            <div>
                { entries }
            </div>
        )
    }
}
