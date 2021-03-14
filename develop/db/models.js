const fs = require('fs');
const {v4:uuidv4} = require ('uuid');
class  models {
    // Read reads the title and text in db.json
    read() {
        return fs.readFile('db.json', 'utf8');
    }
    // Takes text written in title and text and write in note
    write(note) {
        return fs.writeFile('db.json', 'utf8');
    }
    // Read text and turns into JSON object
    getNotes() {
        this.read().then((notes) => {
            const newNotes = JSON.parse(notes);
            return newNotes;
        });
    }
    // Gathers previousNotes and adds newNote to it
    addNotes(note) {
        const {
            title, text
        } = note;
        const id = uuidv4();
        const newNote = {
            title, text, id
        }
        const previousNotes = getNotes();
        const futureNotes = [...previousNotes, newNote];
        this.write(futureNotes);
    }; 
}

module.exports = new models();