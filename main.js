const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 1100,
        height: 850,
        minWidth: 760,
        minHeight: 650,
        title: "Varun's Converter",
        autoHideMenuBar: true
    });

    win.loadFile(path.join(__dirname, "varuns-converter.html"));
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});