import PropTypes from "prop-types";
import { useState, useContext } from "react";
import NoteContext from "../contexts/notes/noteContext";

export default function Addnote({ showAlert }) {
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const context = useContext(NoteContext);

    const { addNote } = context;

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    };

    // handeling click to add note to database
    const handleClick = (event) => {
        event.preventDefault();
        console.log(note);
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        showAlert("success", "Note Added Successfully");
    };

    return (
        <>
            <div className="container my-3">
                <h2>Add a Note</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            minLength={5}
                            value={note.title}
                            required
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            minLength={5}
                            value={note.description}
                            required
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">
                            Tag
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="tag"
                            name="tag"
                            value={note.tag}
                            onChange={onChange}
                        />
                    </div>

                    <button
                        disabled={note.title.length < 5 || note.description.length < 5}
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleClick}>
                        Add Note
                    </button>
                </form>
            </div>
        </>
    );
}
Addnote.propTypes = {
    showAlert: PropTypes.func.isRequired,
};