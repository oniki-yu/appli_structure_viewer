require('es6-promise').polyfill();
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';
import React, { Component, PropTypes } from 'react';
import 'babel-polyfill';
const { ipcRenderer } = require("electron");
import { Router, Route, hashHistory, Link, History } from "react-router";

import { addList } from './action';
import configureStore from './configureStore'
import Page from './components/Page';
import Example from './components/Example';
import Sample from './components/Sample';
import ContainerPageId from './components/PageId';

const store = configureStore();

//Routingの定義
const appRouting = (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="pages" component={Page}>
                <Route path=":pageId" component={ContainerPageId} history={hashHistory}/>
            </Route>
            <Route path="sample" component={Sample} />
            <Route path="example" component={Example} />
        </Route>
    </Router>
);

//Routingの初期化
if (!location.hash.length) {
    location.hash = "#/pages/1";
}

ReactDom.render((
    <Provider store={store}>
        {appRouting}
    </Provider>
), document.getElementById('root'));

//ページ表示時に受け取るデータ
ipcRenderer.on("ping", (event, message) => {
    // message.map(child => console.log(child.title));
});

//mainに送ったあと返ってきたもの
ipcRenderer.on("asynchronous-reply", (event, message) => {
    store.dispatch(addList(message));
});

const mapStateToProps = (state) => {
    const { page } = state;
    return {
        page: page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addList: e => dispatch(addList(e))
    };
};

const ContainerBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);

export default ContainerBox;

