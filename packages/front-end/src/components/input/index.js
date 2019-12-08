import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Input = ({
    type,
    name,
    label,
    id,
    className,
    required,
    value,
    onChange,
    ...rest
}) => {
    return (
        <div className={className}>
            <label htmlFor={id}>
                {label}
                {required && <span className={styles.required}> *</span>}
                <input
                    type={type}
                    name={name}
                    id={id}
                    value={value}
                    required={required}
                    onChange={onChange}
                    {...rest}
                />
            </label>
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    rest: PropTypes.objectOf(PropTypes.object)
};

Input.defaultProps = {
    className: null,
    required: false,
    rest: {}
};

export default Input;
