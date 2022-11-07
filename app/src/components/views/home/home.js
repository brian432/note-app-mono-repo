import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delNotes, postNote, putNotes } from '../../../store/actions/noteActions'
import { Header } from '../../header/header'
import { CreateNotes } from '../../createNotes/createNotes'
import { Note } from '../../note/note'

import './home.css'

export const Home = () => {
    const [showImportant, setShowImportant] = useState(false)
    const notes = useSelector(({ notesReducer: { notes } }) => notes.filter(note => showImportant ? note.important : note))

    const dispatch = useDispatch()

    const createNote = useCallback((newNote) => {
        const noteObject = {
            content: newNote
        }
        dispatch(postNote(noteObject))
    }, [])

    const togleImportant = useCallback((id) => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }
        dispatch(putNotes(id, changedNote))
    }, [notes])

    const handleShowImportant = () => {
        setShowImportant(!showImportant)
    }

    const deleteNote = (id) => {
        dispatch(delNotes(id))
    }

    return (
        <>
            <Header />
            <div className="home">
                <h1>Home</h1>
                <CreateNotes createNote={createNote} />
                <button onClick={handleShowImportant}>{showImportant ? "Show all" : "Show important"}</button>
                <ul className='notes'>
                    {
                        notes?.map((note) =>
                            <Note key={note.id} {...note} togleImportant={togleImportant} deleteNote={deleteNote} />
                        )
                    }
                </ul>
            </div>
        </>
    )
}