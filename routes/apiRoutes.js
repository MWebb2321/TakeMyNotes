// const noteData = require('../develop/db/db.json');
const router = require('express').Router();

router.get('/api/notes', (req, res) => res.json({test: 'noteData'}));

router.post('/api/notes', (req, res) => {
      let array = req.body;
      array.id;
      for (let i = 0; i < noteData.length; i++) {
        array.id = i;
      }
      noteData.push(req.body);
      res.json(true);
});

router.delete('/api/notes/:id', (req, res) => {

    const chosen = req.params.id;
  
    var removeId = noteData.map(function(item) { return item.id; }).indexOf(chosen);

    noteData.splice(removeId, 1);
    res.json(true);
});

module.exports = router;