import React from "react";
import {List, ListItem} from 'material-ui/List';

export default class ContributorData extends React.Component {
    render() {
        const { data, idx } = this.props;
        const name = data.name ? data.name : "no name";
        const switching_restriction = data.switching_restriction ? data.switching_restriction : "no switching_restriction";
        const uri = data.uri ? data.uri : "no uri";
        return (
            <ListItem
                key={idx + 1}
                primaryText="Contributors"
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem
                        key={1}
                        primaryText={ "name:  " + name }
                    />,
                    <ListItem
                        key={2}
                        primaryText={ "switching_restriction:  " + switching_restriction }
                    />,
                    <ListItem
                        key={3}
                        primaryText={ "uri:  " + uri }
                    />
                ]}
            />
        )
    }
}
