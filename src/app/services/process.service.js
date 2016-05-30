"use strict";
const BrowserWindow = require('electron').remote.BrowserWindow;
const ipcRenderer = require('electron').ipcRenderer;
const path = require('path');
const windowID = BrowserWindow.getFocusedWindow().id;
const invisPath = 'file://' + path.join(__dirname, 'invisible.html');
let win = new BrowserWindow({ width: 400, height: 400, show: false });
win.loadURL(invisPath);
win.webContents.on('did-finish-load', function () {
    const input = 100;
    win.webContents.send('compute-factorial', input, windowID);
});
ipcRenderer.on('factorial-computed', function (event, input, output) {
    const message = `The factorial of ${input} is ${output}`;
    console.log(message);
});
//# sourceMappingURL=process.service.js.map