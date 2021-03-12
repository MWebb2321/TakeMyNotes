const path = require('path');

module.exports = (app) => {
    app.get('/home', (req, res) => {
        res.sendFile(path.join(_dirname, './develop/public/index.html'));
    });
    
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, './develop/public/notes.html'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './develop/public/index.html'));
    });
};