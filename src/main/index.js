import { app, BrowserWindow } from 'electron';
const { ipcMain } = require("electron");
import axios from 'axios';


import createWindow from './createWindow';

function reply (event, url, data) {
    event.sender.send("asynchronous-reply", url, data)
}

function replyAppli (event, appId, data) {
    event.sender.send("asynchronous-reply-appli", appId, data)
}

//rendererからデータを受け取る
ipcMain.on("asynchronous-message", (event, appId) => {
    axios.get('https://yapp.li/api/tabbar', {
        headers: {"User-Agent": "Yappli/"+ appId +".20170418 (iPhone)"}
    }).then(response => replyAppli(event, appId, response.data.feed));
});

//２回目以降
ipcMain.on("asynchronous-next-data", (event, url) => {
    axios.get(url, {
        headers: {"User-Agent": "Yappli/2afae2dc.20170418 (iPhone)"}
    }).then(response => reply(event, url, response.data.feed.entry));
});

app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', (_e, hasVisibleWindows) => {
    if (!hasVisibleWindows) {
        let win;
        win = new BrowserWindow();
        win.loadURL(`file://${__dirname}/../../index.html`);
    }
});
