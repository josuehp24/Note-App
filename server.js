const express = require('express');
const fs = require('fs');
const util = require ( 'utils');
const path = require('path');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('./Develop/public'));

app.get('/api/notes', function(req, res){
    readFileAsync('./Develop/db/db.json', 'utf8').then(function(data){
        notes = [].concat(JSON.parse(data))
        res.json(notes);
        
    })
});

get.post('/api/note', function(req, res){
    const note = req.body;
    readFileAsync('./Develop/db/db.json', 'utf8').then(function(data){
        const note = [].concat(JSON.parse(data));
        note.id = notes.lenght + 1 
        notes.push(note);
        return notes
    }).then (function(notes){
        writeFileAsync('./Develop/db/db.json', JSON.stringify(notes))
        res.json(notes);

    })
}); 

app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.listen(PORT, function(req, res){

});