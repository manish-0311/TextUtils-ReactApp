import { useState } from "react";
import PropTypes from "prop-types";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";

    const [notes, setNotes] = useState([]);

    //-> Get all notes from the notes collection
    const getNotes = async () => {
        //* Make API call to fetch all notes

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            mode: "cors",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token"),
            },
        });

        const json = await response.json();
        setNotes(json);
    };

    //-> Add a new note to the notes collection
    const addNote = async (title, description, tag) => {
        //* Make API call to add a note

        await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            mode: "cors",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token"),
            },
            body: JSON.stringify({ title, description, tag }),
        });
        getNotes();
    };

    //-> Edit/Update a note in the notes collection
    const editNote = async (id, title, description, tag) => {
        //* Make API call to edit a note
        await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            mode: "cors",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token"),
            },
            body: JSON.stringify({ title, description, tag }),
        });
        getNotes();
    };

    //-> Delete a note from the notes collection
    const deleteNote = async (id) => {
        //* Make API call to delete a note

        await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            mode: "cors",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token"),
            },
        });
        getNotes();
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, getNotes, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};
NoteState.propTypes = {
    children: PropTypes.node.isRequired,
};
export default NoteState;
