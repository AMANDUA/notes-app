const fs = require('fs')

const mynotes = () => {
    // return "This is my Notes...!!"
    return fs.readFileSync('notes.txt').toString()
}

const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    } else {
        console.log('title already taken')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const note = notes.filter((note) => {
        return note.title === title
    })

    if (note.length !== 0) {
        notes.pop(note)
        saveNotes(notes)
        return true
    } else {
        return false
    }
    
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
    try {
        const notes = fs.readFileSync('notes.json').toString();
        return JSON.parse(notes)
    } catch(e) {
        return []
    }
    
}

// export default mynotes;
module.exports = {
    mynotes,
    addNotes,
    removeNote
}