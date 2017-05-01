import React from "react";
import {List, ListItem} from 'material-ui/List';

import EntryData from './EntryData';

export default class Entry extends React.Component {
    render() {
        const { data } = this.props;
        const entryIdx = this.props.idx ? this.props.idx : 1;
        const entries = data.map((data, key) => {
            return (
                <EntryData data={data} idx={key} key={key}  />
            )
        });
        return (
        <ListItem
            key={ entryIdx }
            primaryText="Entry"
            primaryTogglesNestedList={true}
            nestedItems={
                entries
            }
        />
        )
    }
}
