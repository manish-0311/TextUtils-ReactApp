// Note App
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import NoteState from "./contexts/notes/NoteState";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => {
        setAlert({
            type: type,
            message: message,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };
    return (
        <>
            <NoteState>
                <Navbar />

                <Alert alert={alert} />

                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Home showAlert={showAlert} />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/login" element={<Login showAlert={showAlert} />} />
                        <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
                    </Routes>
                </div>
            </NoteState>
        </>
    );
}

export default App;
