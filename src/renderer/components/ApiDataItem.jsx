import React from "react";
const { ipcRenderer } = require("electron");

export default class ApiDataItem extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick (name, url) {
        this.props.reservePageHistory(name, url);
        ipcRenderer.send("asynchronous-next-data", url);
    }
    render() {
        const {page} = this.props;
        let data = '';
        if (typeof page === 'object') {
            data = <div>object</div>;
        } else {
            data = <div>text</div>;
        }
        return (
            <p>
                {data}
                {/*<div onClick={() => this.handleClick(page.name, page.url)}>{page.name}</div>*/}
            </p>
        )
    }
}
