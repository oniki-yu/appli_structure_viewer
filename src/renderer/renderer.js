const { ipcRenderer } = require("electron");

ipcRenderer.on("ping", (event, message) => {
    message.map(child => console.log(child.title));
});

function list_send_event (event) {
    ipcRenderer.send("asynchronous-next-data", event.target.id);
}

function append_list(page) {
    const newComment = document.createElement("li");
    const id = page.link[0]._href;

    newComment.setAttribute('id', id);
    newComment.setAttribute('class', 'list');

    // 作成したli要素をDOMに挿入する
    newComment.innerText = page.title;
    document.getElementById("comments").appendChild(newComment);
    document.getElementById(id).addEventListener('click', list_send_event.bind(this), false);
}

//mainに送ったあと返ってきたもの
ipcRenderer.on("asynchronous-reply", (event, message) => {
    message.map(child => append_list(child));
    console.log("reply-test");
});


document.addEventListener("DOMContentLoaded", () => {
    // formのsubmit時の動作を定義する
    document.getElementById("comment-form").onsubmit = () => {
        //mainに送る
        ipcRenderer.send("asynchronous-message", "2afae2dc");
        return false;
    };
});