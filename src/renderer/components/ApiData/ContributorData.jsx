import React from "react";

export default class ContributorData extends React.Component {
    render() {
        const { data } = this.props;
        const name = data.name ? data.name : "no name";
        const switching_restriction = data.switching_restriction ? data.switching_restriction : "no switching_restriction";
        const uri = data.uri ? data.uri : "no uri";
        return (
            <div>
                <p>name: { name }</p>
                <p>switching_restriction: { switching_restriction }</p>
                <p>uri: { uri }</p>
            </div>
        )
    }
}
