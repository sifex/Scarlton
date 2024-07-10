const { contextBridge, ipcRenderer } = require('electron')

/**
 * Communication between [Web] -and-> [Electron]
 */
contextBridge.exposeInMainWorld('scarlet', {
    // Window Controls
    close: () => ipcRenderer.send("close"),
    minimise: () => ipcRenderer.send("minimise"),

    // Auth
    steam_login: () => ipcRenderer.send("steam_login"),
    open_admin_page_in_browser: () => ipcRenderer.send("open_admin_page_in_browser"),

    // Install Directory
    open_choose_install_dir: (existing_directory) => ipcRenderer.send("open_choose_install_dir", existing_directory),
    on_select_install_dir: (callback) => ipcRenderer.on('on_select_install_dir', callback),

    // Rust Bindings
    start_download: () => ipcRenderer.send("start_download"),
    stop_download: () => ipcRenderer.send('stop_download'),
    ping: () => ipcRenderer.invoke("ping"),
})

