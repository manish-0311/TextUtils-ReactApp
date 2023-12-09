import { useContext } from "react";
import NoteContext from "../contexts/notes/noteContext";
import PropTypes from "prop-types";
export default function Updatenote({ showAlert, modalRef, newnote, setNewnote }) {
    // getting the context from noteContext
    const context = useContext(NoteContext);
    const { editNote } = context;

    const onChange = (event) => {
        setNewnote({ ...newnote, [event.target.name]: event.target.value });
    };

    //* Updating the notes
    const handleClick = () => {
        console.log(newnote);
        editNote(newnote.id, newnote.etitle, newnote.edescription, newnote.etag);
        showAlert("success", "Note Updated Successfully");
    };

    return (
        <>
            {/* Button trigger modal */}
            <button
                type="button"
                className="btn btn-primary d-none"
                ref={modalRef}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                launch modal
            </button>
            {/* Update Note Modal */}
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Update Note
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="etitle"
                                        name="etitle"
                                        value={newnote.etitle}
                                        minLength={5}
                                        required
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edescription"
                                        name="edescription"
                                        value={newnote.edescription}
                                        minLength={5}
                                        required
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">
                                        Tag
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="etag"
                                        name="etag"
                                        value={newnote.etag}
                                        onChange={onChange}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                disabled={
                                    newnote.etitle.length < 5 || newnote.edescription.length < 5
                                }
                                onClick={handleClick}>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Updatenote.propTypes = {
    showAlert: PropTypes.func.isRequired,
    modalRef: PropTypes.object.isRequired,
    newnote: PropTypes.object.isRequired,
    setNewnote: PropTypes.func.isRequired,
};