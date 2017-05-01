import React from "react";

export default class CategoryDate extends React.Component {
    render() {
        const { data } = this.props;
        const _schema = data._schema ? data._schema : "no _schema";
        const _term = data._term ? data._term : "no _term";
        return (
            <div>
                <p>_schema: { _schema }</p>
                <p>_term: { _term }</p>
            </div>
        )
    }
}
