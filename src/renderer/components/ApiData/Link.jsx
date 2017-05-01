import React from "react";
import {List, ListItem} from 'material-ui/List';

import LinkData from './LinkData';

export default class Entry extends React.Component {
    render() {
        const { data } = this.props;
        const linkIdx = this.props.idx ? this.props.idx : 1;
        const links = data.map((data, key) => {
            return (
                <LinkData data={data} idx={key} key={key}  />
            )
        });
        return (
            <ListItem
                key={ linkIdx }
                primaryText="Link"
                primaryTogglesNestedList={true}
                nestedItems={
                    links
                }
            />
        )
    }
}
