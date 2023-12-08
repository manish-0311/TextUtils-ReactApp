import PropTypes from "prop-types";
export default function Alert({ alert }) {
    return (
        <div className="container mt-2" style={{ height: "70px" }}>
            {alert && (
                <div className={`alert alert-${alert.type}`} role="alert">
                    {alert.message}
                </div>
            )}
        </div>
    );
}

Alert.propTypes = {
    alert: PropTypes.shape({
        type: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    }),
};
