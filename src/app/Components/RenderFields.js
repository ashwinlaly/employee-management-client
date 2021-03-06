import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';

export const renderInput = ({input, label, meta, type}) => {
    return(
        <Form.Group controlId={label}>
            <Form.Label>{label}</Form.Label>
            <Form.Control {...input} type={type}/>
            {renderError(meta)}
        </Form.Group>
    )
}

export const renderSelect = ({input, label, meta, options, id, selectOptionName, selectText}) => {
    return(
        <Form.Group controlId={label}>
            <Form.Label>{label}</Form.Label>
            <Form.Control as="select"  {...input}>
                <Options options={options} selectOptionName={selectOptionName} id={id} selectText={selectText}/>
            </Form.Control>
            {renderError(meta)}
        </Form.Group>
    )
}

export const Options = ({options, id, selectOptionName, selectText}) => {
    if(options){
        return (
            <Fragment>
                <option value=''>{selectText}</option>
                {options.map((option, key) => <option value={option[id]} key={key}>{option[selectOptionName]}</option>)}
            </Fragment>
        )
    } return null
}

export const renderError = ({error, touched}) => {
    return (touched) ? <div className="form-error">{error}</div> : null
}
