import React from "react";
import {List, ListItem} from 'material-ui/List';

import CategoryData from './CategoryData';

export default class Category extends React.Component {
    render() {
        const { data } = this.props;
        const categoryIdx = this.props.idx ? this.props.idx : 1;
        const categories = data.map((data, key) => {
            return (
                <CategoryData data={data} idx={key} key={key}  />
            )
        });
        return (
            <ListItem
                key={ categoryIdx }
                primaryText="Category"
                primaryTogglesNestedList={true}
                nestedItems={
                    categories
                }
            />
        )
    }
}
