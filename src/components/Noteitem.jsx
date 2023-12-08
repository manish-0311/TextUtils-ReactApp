import { useContext } from "react";
import NoteContext from "../contexts/notes/noteContext";
import PropTypes from "prop-types";
export default function NoteItem({ note, showAlert, setNewnote }) {
    // getting the context from noteContext
    const context = useContext(NoteContext);
    const { deleteNote } = context;

    const handleDelete = () => {
        deleteNote(note._id);
        showAlert("success", "Note Deleted Successfully");
    };

    //* Adding the data of selected note tobe edited to the "newnote" state in the Notes.js component
    const handleClick = () => {
        setNewnote({
            id: note._id,
            etitle: note.title,
            edescription: note.description,
            etag: note.tag,
        });
    };
    return (
        <>
            <div className="container col-md-3 my-3">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <h5 className="card-title">{note.title}</h5>

                            {/* Button to trigger update note  */}
                            <i
                                className="far fa-edit mx-2"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                onClick={handleClick}></i>
                            {/* Button to trigger delete note  */}
                            <i className="far fa-trash-alt mx-2" onClick={handleDelete}></i>
                        </div>
                        <p className="card-text">{note.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
NoteItem.propTypes = {
    note: PropTypes.object.isRequired,
    showAlert: PropTypes.func.isRequired,
    setNewnote: PropTypes.func.isRequired,
};