import React from "react";
const { ipcRenderer } = require("electron");
import { Link, hashHistory } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import { reservePage } from '../action';

class PageId extends React.Component {
    render() {
        const datas = this.props.page.toJSON().datas;
        const Lists = datas.map((page, key) => {
            return (
                <ListItems page={page} id={key} key={key} reservePageFunc={this.props.reservePage}/>
            )
        });
        return (
            <div>
                <Link to="/sample">Sample</Link>
                <div onClick={()=>hashHistory.goBack()}>Go BACK</div>
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

const mapStateToProps = (state) => {
    const { page, pageHistory } = state;
    return {
        page: page,
        pageHistory: pageHistory
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        reservePage: (name, url) => dispatch(reservePage(name, url))
    };
};

const ContainerPageId = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageId);

export default ContainerPageId;
