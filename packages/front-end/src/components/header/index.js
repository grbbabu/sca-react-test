import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ className }) => {
    return (
        <div className={className}>
            <h1>Subscribe</h1>
        </div>
    );
};

Header.propTypes = {
    className: PropTypes.string
};

Header.defaultProps = {
    className: null
};

export default Header;
