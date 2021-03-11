const path = require('path');

module.exports = (app) => {

    app.get('/home', (req,res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, 'notes.html'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });
};