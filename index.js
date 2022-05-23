//gobla veriable
const express = require('express')
const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const NoteDB = require('./db/db.json');

//set port to host 
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/note', (req,res) => res.sendFile(path.join(__dirname, './public/notes.html')));

//get api data
app.get('./apu/note', (req,res) => res(NoteDB));

//post api data
app.post('./api/note', (req,res) => {
    let idNumber = uuid();
    let newNote = req.body;
    newNote.id = idNumber;
    NoteDB.push(newNote);
    res.json(NoteDB);
})

app.listne(PORT, () => console.log(`Server listeing at port ${PORT}`))