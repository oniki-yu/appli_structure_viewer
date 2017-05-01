import React from "react";
import {List, ListItem} from 'material-ui/List';

import AuthorData from './AuthorData';

export default class Author extends React.Component {
    render() {
        const { data } = this.props;
        const authorIdx = this.props.idx ? this.props.idx : 1;
        const authors = Array.isArray(data) ?
            data.map((data, key) => (<AuthorData data={data} idx={key} key={key}/>)) :
            (typeof data === 'object') ?
            (<ListItem primaryText={ data.name ? "name: " + data.name : 'no name'} />) : null;
        return (
            <ListItem
                key={ authorIdx }
                primaryText="Author"
                primaryTogglesNestedList={true}
                nestedItems={
                    authors
                }
            />
        )
    }
}
