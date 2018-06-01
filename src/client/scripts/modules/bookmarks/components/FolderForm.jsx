import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderText } from 'components/form/FieldRenderer';

const FolderForm = ({ handleSubmit, submitting }) => (
    <form onSubmit={handleSubmit}>
        <Field name="name" component={renderText} type="text" label="Folder" placeholder="e.g. Sports..." />
        <button type="submit" className="btn" disabled={submitting}>Submit</button>
    </form>
);

const validate = () => {
    const errors = {};

    return errors;
}

export default reduxForm({
    form: 'folderForm',
    validate
})(FolderForm);
