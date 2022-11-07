export const getAllNotes = async () => {
    try {
        let request = await fetch('/api/notes', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + localStorage.getItem('LoggedAppUser')
            }
        })
        let response = await request.json()
        return response
    } catch (err) {
        console.log('getNotes bad request', err);
    }
}

export const createNote = async (noteObject) => {
    try {
        let req = await fetch('/api/notes', {
            method: 'POST',
            body: JSON.stringify(noteObject),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + localStorage.getItem('LoggedAppUser')
            }
        })
        let res = await req.json()
        return res
    } catch (err) {
        console.log('Post note failure', err);
    }
}

export const updateNote = async (id, changedNote) => {
    try {
        let request = await fetch(`/api/notes/${id}`, {
            method: 'PUT',
            body: JSON.stringify(changedNote),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + localStorage.getItem('LoggedAppUser')
            }
        })
        let response = await request.json()
        return response

    } catch (err) {
        console.log('PUT failure', err);
    }
}

export const deleteNote = async (id) => {
    try {
        let request = await fetch(`/api/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + localStorage.getItem('LoggedAppUser')
            }
        })
        let response = await request.json()
        console.log(response)
        return response

    } catch (err) {
        console.log('PUT failure', err);
    }
}