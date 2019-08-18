const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse("New Note added"))
    } else {
        console.log(chalk.red.inverse("Duplicate Note title found"))
    }
}

const removeNote = (title) => {
    console.log('Note to be removed: ' + title)

    const notes = loadNotes()

    const unmatchedNotes = notes.filter((note) => note.title !== title)

    if (notes.length > unmatchedNotes.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(unmatchedNotes)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const readNote = (title) => {
    console.log('Note to be read: ' + title)

    const notes = loadNotes()

    const matchedNote = notes.find((note) => note.title === title)

    if (matchedNote) {
        console.log(chalk.bold('Title: ' + matchedNote.title))
        console.log(chalk.bold('Body: ' + matchedNote.body))
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.green.bold('Your Notes'))
    notes.forEach((note) => console.log(note.title))
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}