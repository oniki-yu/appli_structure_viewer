import React from "react";
import {List, ListItem} from 'material-ui/List';

import ContainerLinkData from './LinkData';

export default class Entry extends React.Component {
    render() {
        const { data, pageTitle } = this.props;
        const linkIdx = this.props.idx ? this.props.idx : 1;
        const links = data.map((data, key) => {
            return (
                <ContainerLinkData data={data} idx={key} key={key} pageTitle={pageTitle}  />
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
