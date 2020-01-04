const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Notes Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Notes Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)
        console.log('Title: ' + argv.title + '\nBody: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'title that we want to remove',
            demandOption: true,
            type: String
        }
    },
    handler: (argv) => {
        const result = notes.removeNote(argv.title)
        // console.log('removing a note')
        if (result) {
            console.log(chalk.green.bold.inverse('Note removed'))
        } else {
            console.log(chalk.red.inverse('No notes with the given title'))
        }

    }
})

// Create read command
yargs.command({
    command:'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading a new note')
    }
})

// Create list command
yargs.command({
    command:'list',
    describe: 'Listing all notes',
    handler: () => {
        console.log('listing all notes')
    }
})

console.log(yargs.argv)

// import notes from './notes'

// console.log(notes())

// console.log(chalk.blue.bold.inverse('SUCCESS!'))

// console.log(process.argv)

// const fs = require('fs')
// // fs.writeFileSync('notes.txt', 'This file was created by Node.js!! Hello my name is Aman')
// fs.appendFileSync('notes.txt', '\nI am a Node.js Developer ')