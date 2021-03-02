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

export const renderSelect = ({input, label, meta, options, id, selectOptionName}) => {
    console.log(input, label, meta, options, id, selectOptionName)
    return(
        <Form.Group controlId={label}>
            <Form.Label>{label}</Form.Label>
            <Form.Control as="select"  {...input} onChange={(value) => input.onChange(value)}>
                <Options options={options} selectOptionName={selectOptionName} id={id}/>
            </Form.Control>
            {renderError(meta)}
        </Form.Group>
    )
}

const Options = ({options, id, selectOptionName}) => {
    return  (options.length > 0) ? options.map(option => <option value={option[id]}>{option[selectOptionName]}</option>) : null
}

export const renderError = ({error, touched}) => {
    return (touched) ? <div className="form-error">{error}</div> : null
}
