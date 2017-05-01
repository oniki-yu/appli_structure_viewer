import React from "react";
import {List, ListItem} from 'material-ui/List';

export default class Content extends React.Component {
    render() {
        const { data } = this.props;
        const contentIdx = this.props.idx ? this.props.idx : 1;
        const _src = data._src ? data._src : "no _src";
        const _type = data._type ? data._type : "no _type";
        return (
            <ListItem
                key={contentIdx}
                primaryText="Content"
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem
                        key={1}
                        primaryText={ "_src:  " + _src }
                    />,
                    <ListItem
                        key={2}
                        primaryText={ "_type:  " + _type }
                    />
                ]}
            />
        )
    }
}
