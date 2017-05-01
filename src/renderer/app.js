require('es6-promise').polyfill();
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';
import React, { Component, PropTypes } from 'react';
import 'babel-polyfill';
const { ipcRenderer } = require("electron");
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { backHistory, reserveAppli, reservePageHistory } from './action';
import configureStore from './configureStore'
import ContainerAppli from './components/Appli';

const store = configureStore();

injectTapEventPlugin();

ReactDom.render((
    <Provider store={store}>
        <MuiThemeProvider>
            <ContainerAppli />
        </MuiThemeProvider>
    </Provider>
), document.getElementById('root'));

//ページ表示時に受け取るデータ
ipcRenderer.on("ping", (event, message) => {
    // message.map(child => console.log(child.title));
});

//mainに送ったあと返ってきたもの
ipcRenderer.on("asynchronous-reply", (event, url, data, pageTitle) => {
    store.dispatch(reservePageHistory(url, data, pageTitle));
});

//最初にmainに送ったあと返ってきたもの
ipcRenderer.on("asynchronous-reply-appli", (event, appId, data) => {
    store.dispatch(reserveAppli('Yappli', appId, data));
});

//遷移履歴クリックのreply
ipcRenderer.on("replyHistory", (event, url, data) => {
    store.dispatch(backHistory(url, data));
});

//最初に送った時
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("comment-form").onsubmit = () => {
        //mainに送る
        ipcRenderer.send("asynchronous-message", "2afae2dc");
        return false;
    };
});