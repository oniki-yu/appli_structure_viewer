import React from "react";

import Category from './Category';
import Contributor from './Contributor';
import Entry from './Entry';

export default class Feed extends React.Component {
    render() {
        const { data } = this.props;
        const category = data.category ? <Category data={ data.category } /> : 'no category';
        const contributor = data.contributor ? <Contributor data={ data.contributor } /> : 'no contributor';
        const entry = data.entry ? <Entry data={ data.entry } /> : 'no entry';
        const id = data.id ? data.id : "no id";
        const subtitle = data.subtitle ? data.subtitle : "no subtitle";
        const title = data.title ? data.title : "no title";
        const updated = data.updated ? data.updated : "no updated";
        return (
            <div>
                { category }
                { contributor }
                { entry }
                <p>id: { id }</p>
                <p>subtitle: { subtitle }</p>
                <p>title: { title }</p>
                <p>updated: { updated }</p>
            </div>
        )
    }
}
