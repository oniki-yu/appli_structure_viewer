import React from "react";
import {List, ListItem} from 'material-ui/List';

export default class AuthorData extends React.Component {
    render() {
        const { data, idx } = this.props;
        const name = data.name ? data.name : "no name";
        return (
            <ListItem
                key={ idx + 1 }
                primaryText="Authors"
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem
                        key={1}
                        primaryText={ "name:  " + name }
                    />
                ]}
            />
        )
    }
}