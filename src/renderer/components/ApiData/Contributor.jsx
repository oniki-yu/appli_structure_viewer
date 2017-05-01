import React from "react";
import {List, ListItem} from 'material-ui/List';

import ContributorData from './ContributorData';

export default class Contributor extends React.Component {
    render() {
        const { data } = this.props;
        const contributorIdx = this.props.idx ? this.props.idx : 1;
        const contributors = data.map((data, key) => {
            return (
                <ContributorData data={data} idx={key} key={key}  />
            )
        });
        return (
        <ListItem
            key={ contributorIdx }
            primaryText="Contributor"
            primaryTogglesNestedList={true}
            nestedItems={
                contributors
            }
        />
        )
    }
}
