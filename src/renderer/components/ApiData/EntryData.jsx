import React from "react";

import Link from './Link';
import Category from './Category';
import Content from './Content';

export default class EntryData extends React.Component {
    render() {
        const { data } = this.props;
        const category = data.category ? <Category data={ data.category } /> : 'no category';
        const content = data.content ? <Content data={ data.content } /> : 'no content';
        const id = data.id ? data.id : "no id";
        const link = data.link ? <Link data={ data.link } /> : 'no link';
        const summary = data.summary ? data.summary : "no summary";
        const title = data.title ? data.title : "no title";
        const updated = data.updated ? data.updated : "no updated";
        return (
            <div>
                <p>category: { category }</p>
                <p>content: { content }</p>
                <p>id: { id }</p>
                <p>link: { link }</p>
                <p>summary: { summary }</p>
                <p>title: { title }</p>
                <p>updated: { updated }</p>
            </div>
        )
    }
}
