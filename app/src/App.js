import { Route, Routes } from "react-router-dom"

import { Register } from "./components/views/auth/register"
import { Login } from "./components/views/auth/login"
import { Home } from "./components/views/home/home"
import { RequireAuth } from "./components/requireAuth.js/requireAuth"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { getNotes } from "./store/actions/noteActions"

const App = () => {
	/*const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState('')
	const [showAll, setShowAll] = useState(true)

	useEffect(() => {
		getAll()
			.then(res => setNotes(res))
	}, [])

	const addNote = (event) => {
		event.preventDefault()
		const noteObject = {
			content: newNote,
			important: Math.random() > 0.5,
		}

		create(noteObject)
			.then(res => {
				setNotes(notes.concat(res))
				setNewNote('')
			})
	}

	const handleNoteChange = (event) => {
		setNewNote(event.target.value)
	}

	const notesToShow = showAll
		? notes
		: notes.filter(note => note.important)

*/
	const dispatch = useDispatch()

	useEffect(() => {
		const LoggedAppUser = localStorage.getItem("LoggedAppUser")
		if (LoggedAppUser) {
			dispatch(getNotes())
			console.log("Appp")
		}
	}, [])


	return (
		<Routes>
			<Route path="/" element={
				<RequireAuth>
					<Home />
				</RequireAuth>
			}
			/>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	)
}

export default App;
