require('es6-promise').polyfill();
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import ReactDom from 'react-dom';
import React, { Component, PropTypes } from 'react';
import 'babel-polyfill';
const { ipcRenderer } = require("electron");
import { addList } from './action';

import configureStore from './configureStore'
import Page from './components/Page';
// import Page from './renderer';

const store = configureStore();

ReactDom.render((
    <Provider store={store}>
        <Page />
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

