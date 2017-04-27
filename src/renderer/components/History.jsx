import React from "react";
const { ipcRenderer } = require("electron");

export default class History extends React.Component {
    handleClick (url, num) {
        this.props.toggleChangeFlagFunc(num);
        ipcRenderer.send("asynchronous-next-data", url);
    }
    render() {
        const {pageHistory, num} = this.props;
        return (
            <div onClick={() => this.handleClick(pageHistory.url, num)}>{pageHistory.name}</div>
        )
    }
}
