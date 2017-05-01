import React from "react";
import {List, ListItem} from 'material-ui/List';

import AuthorData from './AuthorData';

export default class Author extends React.Component {
    render() {
        const { data } = this.props;
        const authorIdx = this.props.idx ? this.props.idx : 1;
        let authors;
        if (Array.isArray(data)) {
            authors = data.map((data, key) => {
                return (
                    <AuthorData data={data} idx={key} key={key}/>
                )
            });
        } else if (typeof data === 'object') {
            const authorName = data.name ? "name:  " + data.name : 'no name';
            authors = <ListItem
                primaryText={ authorName }
            />
        }
        return (
            <ListItem
                key={ authorIdx }
                primaryText="Autor"
                primaryTogglesNestedList={true}
                nestedItems={
                    authors
                }
            />
        )
    }
}
