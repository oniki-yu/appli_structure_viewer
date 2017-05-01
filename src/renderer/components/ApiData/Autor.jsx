import React from "react";
import {List, ListItem} from 'material-ui/List';

import AuthorData from './AuthorData';

export default class Author extends React.Component {
    render() {
        const { data } = this.props;
        const authorIdx = this.props.idx ? this.props.idx : 1;
        const authors = data.map((data, key) => {
            return (
                <AuthorData data={data} idx={key} key={key}  />
            )
        });
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
