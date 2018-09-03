const { format } = require('url')

const { BrowserWindow, app } = require('electron')
const isDev = require('electron-is-dev')
const { resolve } = require('app-root-path')

const devPath = 'http://localhost:8888'
const prodPath = format({
  pathname: resolve('app/renderer/production/index.html'),
  protocol: 'file:',
  slashes: true
})


app.on('ready', async () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    if (isDev) {
      mainWindow.webContents.openDevTools()
    }
  })

  const url = isDev ? devPath : prodPath

  mainWindow.setMenu(null)
  mainWindow.loadURL(url)
})

app.on('window-all-closed', app.quit)
