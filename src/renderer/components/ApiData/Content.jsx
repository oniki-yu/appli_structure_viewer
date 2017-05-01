import React from "react";

export default class Content extends React.Component {
    render() {
        const { data } = this.props;
        const _src = data._src ? data._src : "no _src";
        const _type = data._type ? data._type : "no _type";
        return (
            <div>
                <p>_src: { _src }</p>
                <p>_type: { _type }</p>
            </div>
        )
    }
}
