import React from "react";

import ContributorData from './ContributorData';

export default class Contributor extends React.Component {
    render() {
        const { data } = this.props;
        const contributors = data.map((data, key) => {
            return (
                <ContributorData data={data} key={key}  />
            )
        });
        return (
            <div>
                { contributors }
            </div>
        )
    }
}
