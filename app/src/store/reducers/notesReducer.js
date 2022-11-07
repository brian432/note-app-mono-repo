const initialState = {
    notes: [],
    token: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SUCCESS_CREATED_NOTE":
            return {
                ...state,
                notes: [...state.notes, action.payload],
            }
        case "TOKEN_MISSING":
            return {
                ...state,
                token: false
            }
        case "TOKEN_NULL":
            return {
                ...state,
                token: null
            }
        case "GET_NOTES_SUCCESS":
            return {
                ...state,
                notes: action.payload
            }
        case "PUT_NOTE_SUCCESS":
            return {
                ...state,
                notes: state.notes.map(note => note.id !== action.payload.id ? note : action.payload)
            }
        case "DEL_NOTE_SUCCESS":
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id)
            }
        default:
            return state
    }
}