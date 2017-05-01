import React from "react";
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Autor from './Autor';
import Category from './Category';
import Contributor from './Contributor';
import Entry from './Entry';

export default class Feed extends React.Component {
    render() {
        const { data } = this.props;
        const author = data.author ? <Autor idx={1} data={ data.author } /> : <ListItem key={1} primaryText={ 'author:  no author' } />;
        const category = data.category ? <Category idx={2} data={ data.category } /> : <ListItem key={2} primaryText={ 'category:  no category' } />;
        const contributor = data.contributor ? <Contributor idx={3} data={ data.contributor } /> : <ListItem key={3} primaryText={ 'contributor:  no contributor' } />;
        const entry = data.entry ? <Entry idx={4} data={ data.entry } /> : <ListItem key={4} primaryText={ 'entry:  no entry' } />;
        const id = data.id ? data.id : "no id";
        const subtitle = data.subtitle ? data.subtitle : "no subtitle";
        const title = data.title ? data.title : "no title";
        const updated = data.updated ? data.updated : "no updated";
        return (
            <List>
                { author }
                <Divider />
                { category }
                <Divider />
                { contributor }
                <Divider />
                { entry }
                <Divider />
                <ListItem key={5} primaryText={ "id:  " + id } />
                <Divider />
                <ListItem key={6} primaryText={ "subtitle:  " + subtitle } />
                <Divider />
                <ListItem key={7} primaryText={ "title:  " + title } />
                <Divider />
                <ListItem key={8} primaryText={ "updated:  " + updated } />
            </List>
        )
    }
}
