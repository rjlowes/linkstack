import React from 'react';

export const renderText = ({
    input,
    label,
    placeholder,
    type, meta: {touched, error, warning
}}) => (
    <div className="form-group">
        <label className="form-group__label">{label}</label>
        <div className="form-group__input">
            <input {...input} placeholder={placeholder} type={type} className="form-input" />
            {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>
    </div>
);

export const renderJumboText = ({
    input,
    label,
    placeholder,
    type, meta: {touched, error, warning
}}) => (
    <div className="form-group">
        <label className="form-group__label">{label}</label>
        <div className="form-group__input">
            <input {...input} placeholder={placeholder} type={type} className="form-input form-input--jumbo" />
            {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>
    </div>
);
