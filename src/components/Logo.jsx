import PropTypes from "prop-types";

export const Logo = ({ logo }) => { // Desestructurar 'logo' del objeto props
    return (
        <img className='logo' src={logo} alt="Logo" />
    );
};

Logo.propTypes = {
    logo: PropTypes.string,
}