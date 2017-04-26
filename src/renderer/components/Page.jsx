import React from 'react';
import { connect } from 'react-redux';
const { ipcRenderer } = require("electron");
import { Link } from "react-router";

import { Provider } from 'react-redux';

class Page extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

//送った時
document.addEventListener("DOMContentLoaded", () => {
    // formのsubmit時の動作を定義する
    document.getElementById("comment-form").onsubmit = () => {
        //mainに送る
        ipcRenderer.send("asynchronous-message", "2afae2dc");
        return false;
    };
});

const mapStateToProps = (state) => {
    const { page } = state;
    return {
        page: page
    };
};

const ContainerBox = connect(
    mapStateToProps,
)(Page);

export default ContainerBox;






