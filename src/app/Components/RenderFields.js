import React from 'react';
import Form from 'react-bootstrap/Form';

export const renderInput = ({input, label, meta}) => {
    return(
        <Form.Group controlId={label}>
            <Form.Label>{label}</Form.Label>
            <Form.Control {...input} />
            {renderError(meta)}
        </Form.Group>
    )
}

export const renderError = ({error, touched}) => {
    return (touched) ? <div className="form-error">{error}</div> : null
}
