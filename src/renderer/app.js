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
import ContainerPage from './components/PageId';

const store = configureStore();

ReactDom.render((
    <Provider store={store}>
        <ContainerPage />
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

//送った時
document.addEventListener("DOMContentLoaded", () => {
    // formのsubmit時の動作を定義する
    document.getElementById("comment-form").onsubmit = () => {
        //mainに送る
        ipcRenderer.send("asynchronous-message", "2afae2dc");
        return false;
    };
});