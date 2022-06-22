const {dialog} = require('electron');

console.log(dialog.showOpenDialogSync({properties: ['openFile']}))

