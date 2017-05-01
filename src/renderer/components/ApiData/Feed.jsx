import React from "react";

import Category from './Category';

export default class Feed extends React.Component {
    render() {
        const { data } = this.props;
        const category = data.category ? <Category data={ data.category } /> : 'no category';
        const id = data.id ? data.id : "no id";
        const subtitle = data.subtitle ? data.subtitle : "no subtitle";
        const title = data.title ? data.title : "no title";
        const updated = data.updated ? data.updated : "no updated";
        return (
            <div>
                { category }
                {/*<Contributor data={ data.contributor } />*/}
                {/*<Entry data={ data.entry } />*/}
                <p>id: { id }</p>
                <p>subtitle: { subtitle }</p>
                <p>title: { title }</p>
                <p>updated: { updated }</p>
            </div>
        )
    }
}
