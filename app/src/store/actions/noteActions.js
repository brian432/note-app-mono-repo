import { createNote, deleteNote, getAllNotes, updateNote } from "../../services/notes";

export const noteCreated = note => ({
    type: "SUCCESS_CREATED_NOTE",
    payload: note
})

export const tokenMissing = () => ({
    type: "TOKEN_MISSING"
})

export const tokenNull = () => ({
    type: "TOKEN_NULL"
})

export const getNotesSuccess = data => ({
    type: "GET_NOTES_SUCCESS",
    payload: data
})

export const putNoteSuccess = data => ({
    type: "PUT_NOTE_SUCCESS",
    payload: data
})

export const delNoteSuccess = data => ({
    type: "DEL_NOTE_SUCCESS",
    payload: data
})

export const postNote = (noteObject) => dispatch => {
    createNote(noteObject)
        .then(data => {
            if (data.status_code === 201) {
                dispatch(noteCreated(data.note))
            } else if (data.status_code === 401) {
                dispatch(tokenMissing())
            }
        })
}

export const getNotes = () => dispatch => {
    getAllNotes()
        .then(data => {
            console.log(data);
            if (data.status_code === 200) {
                dispatch(getNotesSuccess(data.notes))
            }
        })
}

export const putNotes = (id, changedNote) => dispatch => {
    updateNote(id, changedNote)
        .then(data => {
            if (data.status_code === 200) {
                dispatch(putNoteSuccess(data.note))
            }
        })
}

export const delNotes = (id) => dispatch => {
    deleteNote(id)
        .then(data => {
            if (data.status_code === 200) {
                dispatch(delNoteSuccess(data.note))
            }
        })
}