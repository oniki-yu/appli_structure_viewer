import React from "react";

export default class Link extends React.Component {
    render() {
        const { data } = this.props;
        const _href = data._href ? data._href : "no _href";
        const _type = data._type ? data._type : "no _type";
        return (
            <div>
                <p>_href: { _href }</p>
                <p>_type: { _type }</p>
            </div>
        )
    }
}
