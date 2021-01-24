import React from 'react';
import { Formik } from 'formik';

// Formik Components
// Formik
// Form
// Field
// ErrorMessage

const BasicInput = () => {
    return (
        <div>
            <Formik initialValues={{ name: 'Tay' }}></Formik>
        </div>
    );
};

export default BasicInput;
