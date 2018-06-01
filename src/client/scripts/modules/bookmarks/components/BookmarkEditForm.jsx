import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { renderText } from 'components/form/FieldRenderer';

let BookmarkEditForm = ({ bookmark, handleSubmit, submitting }) => (
    <form onSubmit={handleSubmit}>
        <Field name="title" component={renderText} type="text" label="Update title" placeholder="Cool site" />
        <Field name="url" component={renderText} type="text" label="Update URL" placeholder="e.g. https://www.google.co.uk" />
        <Field name="image" component={renderText} type="text" label="Update image" placeholder="some image url" />
        <button type="submit" className="btn" disabled={submitting}>Submit</button>
    </form>
);

const validate = () => {
    const errors = {};

    return errors;
}

BookmarkEditForm = reduxForm({
    form: 'bookmarkEditForm',
    validate
})(BookmarkEditForm);

// export default connect(
//     state => ({
//         // initialValues: state.bookmarks.selectedBookmark
//         title: state.bookmarks.selectedBookmark.title
//     })
// )(BookmarkEditForm);

export default BookmarkEditForm;
