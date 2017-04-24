require('es6-promise').polyfill();
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';
import React, { Component, PropTypes } from 'react';
import 'babel-polyfill';
const { ipcRenderer } = require("electron");
import { Router, Route, hashHistory, Link } from "react-router";

import { addList } from './action';
import configureStore from './configureStore'
import Page from './components/Page';
import ContainerPageId from './components/PageId';
import Login from './Login';

const store = configureStore();

//Routingの定義
const appRouting = (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="pages" component={Page}>
                <Route path=":pageId" component={ContainerPageId} />
            </Route>
            <Route path="login" component={Login} />
        </Route>
    </Router>
);

//Routingの初期化
if (!location.hash.length) {
    location.hash = "#/pages";
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

