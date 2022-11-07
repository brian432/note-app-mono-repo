export const Note = ({ content, id, important, togleImportant, deleteNote }) => {
    const label = important
        ? 'make not important' : 'make important'
    return (
        <li>
            {content}
            <button onClick={() => togleImportant(id)}>{label}</button>
            <button onClick={() => deleteNote(id)}>Delete</button>
        </li>
    )
}