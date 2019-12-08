import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Button = ({ type, label, onClick, disabled }) => (
    <button
        type={type}
        className={styles.button}
        onClick={onClick}
        disabled={disabled}
    >
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    type: 'button',
    onClick: null,
    disabled: false
};

export default Button;
