import Notes from "./Notes";
import PropTypes from "prop-types";
export default function Home({ showAlert }) {
    return (
        <>
            <Notes showAlert={showAlert} />
        </>
    );
}

Home.propTypes = {
    showAlert: PropTypes.func.isRequired,
};
