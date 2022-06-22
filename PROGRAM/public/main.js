const {app, BrowserWindow} = require('electron')

require('../ExpressApp')

let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1204,
    height: 805,
    webPreferences: {
      nodeIntegration: true,
      sandbox: false,
      contextIsolation: false, // Включает nodejs даже в новом electron
      nodeIntegrationInWorker: true,
      webSecurity: false,
      allowRunningInsecureContent: true,
      preload: __dirname + '/preload.js'
    },
    resizable: false,
    autoHideMenuBar: true
  })

  mainWindow.loadURL('http://localhost:3000')
//   mainWindow.loadFile('index.html')  
  // mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})