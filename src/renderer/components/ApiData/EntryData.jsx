import React from "react";
import {List, ListItem} from 'material-ui/List';

import Link from './Link';
import Category from './Category';
import Content from './Content';

export default class EntryData extends React.Component {
    render() {
        const { data, idx } = this.props;
        const category = data.category ? <Category data={ data.category } idx={1} /> : 'no category';
        const content = data.content ? <Content data={ data.content }  idx={2} /> : 'no content';
        const id = data.id ? data.id : "no id";
        const link = data.link ? <Link data={ data.link }  idx={4} /> : 'no link';
        const summary = data.summary ? data.summary : "no summary";
        const title = data.title ? data.title : "no title";
        const updated = data.updated ? data.updated : "no updated";
        return (
        <ListItem
            key={idx + 1}
            primaryText="Entries"
            primaryTogglesNestedList={true}
            nestedItems={[
                category,
                content,
                <ListItem key={3} primaryText={ "id:  " + id } />,
                link,
                <ListItem key={5} primaryText={ "summary:  " + summary } />,
                <ListItem key={6} primaryText={ "title:  " + title } />,
                <ListItem key={7} primaryText={ "updated:  " + updated } />,
            ]}
        />
        )
    }
}
