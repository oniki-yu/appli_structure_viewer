import React from "react";

import CategoryDate from './CategoryData';

export default class Category extends React.Component {
    render() {
        const { data } = this.props;
        const categories = data.map((data, key) => {
            return (
                <CategoryDate data={data} key={key}  />
            )
        });
        return (
            <div>
                { categories }
            </div>
        )
    }
}
