import React, { useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/header';
import Input from '../../components/input';
import Button from '../../components/button';
import Form from '../../components/form';
import styles from './index.module.css';
import config from '../../utils/config';

export default function Subscribe() {
    const initialFormState = {
        firstName: '',
        lastName: '',
        email: '',
        mobilePhone: ''
    };
    const [values, setValues] = useState(initialFormState);
    const [formSubmit, setFormSubmit] = useState({
        success: false,
        loading: false,
        failure: false
    });
    const onChangeHandler = e => {
        const { name, value } = e.target;
        setValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        setFormSubmit({ ...formSubmit, loading: true });
        axios({
            method: 'POST',
            url: `${config.API_URL}/subscribe`,
            headers: {
                [config.X_AUTH_TOKEN_HEADER]: config.X_AUTH_TOKEN
            },
            data: values
        })
            .then(function() {
                setFormSubmit({ ...formSubmit, loading: false, success: true });
            })
            .catch(function() {
                setFormSubmit({ ...formSubmit, loading: false, failure: true });
            });
    };

    const allowSubmit = () => {
        // TODO: Validate inputs for length and validity. Use Formik library for displaying validation errors
        return !(values.firstName && values.lastName && values.email);
    };

    const formView = (
        <Form className={classNames(styles.wrapper, styles.formBody)}>
            <Input
                type="text"
                name="firstName"
                id="firstName"
                label="First Name"
                className={styles.inputSpacing}
                required
                onChange={onChangeHandler}
                value={values.firstName}
            />
            <Input
                type="text"
                name="lastName"
                id="lastName"
                label="Last Name"
                className={styles.inputSpacing}
                required
                onChange={onChangeHandler}
                value={values.lastName}
            />
            <Input
                type="email"
                name="email"
                id="email"
                label="Email"
                className={styles.inputSpacing}
                required
                onChange={onChangeHandler}
                value={values.email}
            />
            <Input
                type="tel"
                name="mobilePhone"
                id="mobilePhone"
                label="Mobile Phone"
                className={styles.inputSpacing}
                onChange={onChangeHandler}
                value={values.mobilePhone}
            />
            <Button
                type="submit"
                label="Submit"
                onClick={onSubmitHandler}
                disabled={allowSubmit()}
            />
        </Form>
    );

    const loadingView = (
        <div className={styles.loadingView}>
            <FontAwesomeIcon icon={faSpinner} spin size="5x" />
        </div>
    );

    const successView = (
        <div className={styles.successView}>
            <h2>Thank you for subscribing!</h2>
        </div>
    );

    const failureView = (
        <div className={styles.failureView}>
            <h2>An error occurred. Please try again.</h2>
        </div>
    );

    let view = formView;

    if (formSubmit.loading) {
        view = loadingView;
    }
    if (formSubmit.success) {
        view = successView;
    }
    if (formSubmit.failure) {
        view = failureView;
    }
    return (
        <div>
            <Header className={classNames(styles.wrapper, styles.header)} />
            {view}
        </div>
    );
}
