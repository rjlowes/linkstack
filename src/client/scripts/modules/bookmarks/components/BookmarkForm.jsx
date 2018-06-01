import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderJumboText } from 'components/form/FieldRenderer';

const BookmarkForm = ({ handleSubmit, submitting }) => (
    <form onSubmit={handleSubmit} className="search-form">
        <Field name="url" component={renderJumboText} type="text" label="Enter bookmark URL" placeholder="e.g. https://www.google.co.uk" />
        <button type="submit" className="btn" disabled={submitting}>Submit</button>
    </form>
)

const validate = () => {
    const errors = {};

    return errors;
}

export default reduxForm({
    form: 'bookmarkForm',
    validate
})(BookmarkForm);
