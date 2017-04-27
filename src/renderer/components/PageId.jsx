import React from "react";
const { ipcRenderer } = require("electron");
import { Link, hashHistory } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import { reservePage, toggleChangeFlag } from '../action';

class Page extends React.Component {
    render() {
        const pages = this.props.page.toJSON().datas;
        const apiDatas = pages.map((page, key) => {
            return (
                <ApiDataItem page={page} id={key} key={key} reservePageFunc={this.props.reservePage}/>
            )
        });
        const histories = this.props.pageHistory.toJSON().datas;
        const moveHistories = histories.map((page, key) => {
            return (
                <History pageHistory={page} num={key} key={key} toggleChangeFlagFunc={this.props.toggleChangeFlag} />
            )
        });
        return (
            <div>
                <Link to="/sample">Sample</Link>
                <div onClick={()=>hashHistory.goBack()}>Go BACK</div>
                <div>{moveHistories}</div>
                <ul>{apiDatas}</ul>
            </div>
        )
    }
}

class ApiDataItem extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick (name, url) {
        this.props.reservePageFunc(name, url);
        ipcRenderer.send("asynchronous-next-data", url);
    }
    render() {
        const {page} = this.props;
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

const ContainerPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);

export default ContainerPage;
