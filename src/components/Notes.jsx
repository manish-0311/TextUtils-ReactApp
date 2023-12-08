import { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../contexts/notes/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import Updatenote from "./Updatenote";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"
export default function Notes({ showAlert }) {
    //* this state is used in the update modal
    const [newnote, setNewnote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    let navigate = useNavigate();

    // getting the context from noteContext
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;

    // refrence to the button that toggles the update-note modal
    const modalRef = useRef(null);

    useEffect(() => {
        //* if user doesn't have the auth-token then redirect user to login screen
        if (localStorage.getItem("auth-token")) {
            getNotes();
        } else {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <Addnote showAlert={showAlert} />
            <Updatenote
                modalRef={modalRef}
                showAlert={showAlert}
                newnote={newnote}
                setNewnote={setNewnote}
            />
            <div className="container my-3">
                <h2>Your Notes</h2>
                <div className="row my-3">
                    {notes.map((note) => {
                        return (
                            <Noteitem
                                key={note._id}
                                showAlert={showAlert}
                                note={note}
                                setNewnote={setNewnote}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
Notes.propTypes = {
    showAlert: PropTypes.func.isRequired,
}