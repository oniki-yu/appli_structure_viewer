import React from "react";
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Category from './Category';
import Contributor from './Contributor';
import Entry from './Entry';

export default class Feed extends React.Component {
    render() {
        const { data } = this.props;
        const category = data.category ? <Category idx={1} data={ data.category } /> : 'no category';
        const contributor = data.contributor ? <Contributor idx={2} data={ data.contributor } /> : 'no contributor';
        const entry = data.entry ? <Entry idx={3} data={ data.entry } /> : 'no entry';
        const id = data.id ? data.id : "no id";
        const subtitle = data.subtitle ? data.subtitle : "no subtitle";
        const title = data.title ? data.title : "no title";
        const updated = data.updated ? data.updated : "no updated";
        return (
            <List>
                { category }
                <Divider />
                { contributor }
                <Divider />
                { entry }
                <Divider />
                <ListItem key={4} primaryText={ "id:  " + id } />
                <Divider />
                <ListItem key={5} primaryText={ "subtitle:  " + subtitle } />
                <Divider />
                <ListItem key={6} primaryText={ "title:  " + title } />
                <Divider />
                <ListItem key={7} primaryText={ "updated:  " + updated } />
            </List>
        )
    }
}
