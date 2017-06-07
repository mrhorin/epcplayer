import { app, BrowserWindow, ipcMain } from 'electron'

let window = { app: null }

/*-----------------------------------------
  アプリケーション起動準備完了時
-----------------------------------------*/
app.on('ready', () => {
    window.app = new BrowserWindow({
      width: 320,
      height: 240,
    })
    window.app.loadURL(`file://${__dirname}/html/app.html`)
    // 閉じた時
    window.app.on('close', () => {
      window.app = null      
    })
})

/*-----------------------------------------
  すべてのウィンドウが閉じられた時
-----------------------------------------*/
app.on('window-all-closed', ()=>{
  if(process.platform != 'darwin') app.quit()
})