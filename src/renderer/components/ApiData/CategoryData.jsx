import React from "react";
import {List, ListItem} from 'material-ui/List';

export default class CategoryData extends React.Component {
    render() {
        const { data, idx } = this.props;
        const _schema = data._schema ? data._schema : "no _schema";
        const _term = data._term ? data._term : "no _term";
        return (
            <ListItem
                key={idx + 1}
                primaryText="Categories"
                primaryTogglesNestedList={true}
                nestedItems={[
                    <ListItem
                        key={1}
                        primaryText={ "_schema:  " + _schema }
                    />,
                    <ListItem
                        key={2}
                        primaryText={ "_term:  " + _term }
                    />,
                ]}
            />
        )
    }
}
