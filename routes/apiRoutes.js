const fs = require("fs");
const path = require("path");

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        let notes = fs.readFileSync(path.join(__dirname, "../db/db.json"), 'utf8');
        notes = JSON.parse(notes);
        console.log(notes);
        res.json(notes);
    })

    app.post("/api/notes", (req,res) => {
        let notes = fs.readFileSync(path.join(_dirname, "../db/db.json"), "utf8");
        const newId = uuid4();
        const newNote = {
            id = newID,
            title: req.body.title,
            text: req.body.text
        };
        notes = JSON.parse(notes);
        notes.push(req.body);
        fs.writeFileSync(path.join(_dirname, "../db/db.json"), JSON.stringify(notes), "utf8");
        res.json(notes);
    });

    app.delete(`api/notes/:id`, (req, res) => {
        let notes = fs.readFileSync(path.join(_dirname, "../db/db.json"), 'utf8');
        let id = req.params.id;
        notes = JSON.parse(notes);
        for (let i = 0; i < notes.length; i++) {
            if (id == notes[i].id) {
                notes.splice(i, 1);
                fs.writeFileSync(path.join(_dirname, '../db/db.json'), JSON.stringify(notes), 'utf8');
                res.json(notes);
            } else {
                throw (err);
            }
        }
    })

};
