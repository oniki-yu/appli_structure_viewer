import { app, BrowserWindow } from 'electron';
const { ipcMain } = require("electron");
import axios from 'axios';


import createWindow from './createWindow';

function reply (event, data) {
    event.sender.send("asynchronous-reply", data)
}

//rendererからデータを受け取る
ipcMain.on("asynchronous-message", (event, arg) => {
    console.log(arg);
    axios.get('https://yapp.li/api/tabbar', {
        headers: {"User-Agent": "Yappli/"+ arg +".20170418 (iPhone)"}
    }).then(response => reply(event, response.data.feed.entry));
});

//２回目以降
ipcMain.on("asynchronous-next-data", (event, arg) => {
    console.log(arg);
    axios.get(arg, {
        headers: {"User-Agent": "Yappli/2afae2dc.20170418 (iPhone)"}
    }).then(response => reply(event, response.data.feed.entry));
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
        // createWindow();
        let win;
        win = new BrowserWindow();
        win.loadURL(`file://${__dirname}/../../index.html`);
    }
});
