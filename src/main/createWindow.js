import { BrowserWindow } from 'electron';
import axios from 'axios';

let win;
//ページ表示時のデータ送るfunction
function send_data (data, win) {
    win.webContents.on("did-finish-load", () => {
        win.webContents.send("ping", data)
    });

}

function createWindow() {
    win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/../../index.html`);
    //ページ表示時に全てのアプリのデータを送っている
    axios.get('https://n3YUi2b0FrLROayFrmUiJVIYhQwaW0KA@yapp.li/api/app/enterprise', {
    }).then(response => send_data(response.data.feed.entry, win));
};

export default createWindow;