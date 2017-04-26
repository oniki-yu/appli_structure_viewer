import React from "react";
const { ipcRenderer } = require("electron");
import { Link, hashHistory } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import { reservePage, toggleChangeFlag } from '../action';

class PageId extends React.Component {
    render() {
        const pages = this.props.page.toJSON().datas;
        const Lists = pages.map((page, key) => {
            return (
                <ListItems page={page} id={key} key={key} reservePageFunc={this.props.reservePage}/>
            )
        });
        const histories = this.props.pageHistory.toJSON().datas;
        console.log(this.props.pageHistory.toJSON().currentNumber);
        const MoveHistories = histories.map((page, key) => {
            return (
                <History pageHistory={page} num={key} key={key} toggleChangeFlagFunc={this.props.toggleChangeFlag} />
            )
        });
        return (
            <div>
                <Link to="/sample">Sample</Link>
                <div onClick={()=>hashHistory.goBack()}>Go BACK</div>
                <div>{MoveHistories}</div>
                <ul>{Lists}</ul>
            </div>
        )
    }
}

class ListItems extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick (name, url) {
        this.props.reservePageFunc(name, url);
        ipcRenderer.send("asynchronous-next-data", url);
    }
    render() {
        const {page} = this.props;
        const crypto = require('crypto');
        const shasum = crypto.createHash('sha1');
        const sha1 = url => {
            shasum.update(url);
            return shasum.digest('hex');
        };
        return (
            <p>
                <div onClick={() => this.handleClick(page.name, page.url)}>{page.name}</div>
            </p>
        )
    }
}

class History extends React.Component {
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

const mapStateToProps = (state) => {
    const { page, pageHistory } = state;
    return {
        page: page,
        pageHistory: pageHistory
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        reservePage: (name, url) => dispatch(reservePage(name, url)),
        toggleChangeFlag: (url, num) =>  dispatch(toggleChangeFlag(url, num))
    };
};

const ContainerPageId = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageId);

export default ContainerPageId;
