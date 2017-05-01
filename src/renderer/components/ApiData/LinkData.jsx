import React from "react";
import {List, ListItem} from 'material-ui/List';

export default class LinkData extends React.Component {
    render() {
        const { data, idx } = this.props;
        const _href = data._href ? data._href : "no _href";
        const _type = data._type ? data._type : "no _type";
        return (
            <ListItem
                key={ idx + 1 }
                primaryText="Links"
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem
                        key={1}
                        primaryText={ "_href:  " + _href }
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





