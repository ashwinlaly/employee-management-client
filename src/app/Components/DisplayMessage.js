import React from 'react';

import Alert from 'react-bootstrap/Alert';

const mystyle = {
    alertBox : {
        top: '5%'
    }
}

const List = ({items}) => {
    return (<ul>{items.map((item, key) => {return (<li key={key}>{item.msg}</li>)})}</ul>)
}

const DisplayMessage = (props) => {
    let type = ''
    let status = ''
    let messages = []

    if(props.errormessage) {
        type = "error"
        messages = (props.errors !== undefined) ? props.errors : []
        status = props.errormessage
    } else if(props.successmessage) {
        messages = []
        type = "success"
        status = props.successmessage
    }

    if(type === "success") {
        return (<>
            <Alert variant="success" style={mystyle.alertBox}>
                {(messages.length > 0)? <List items={messages}/> : status}
            </Alert>
        </>)
    } else if(type === "error") {
        return (<>
            <Alert variant="danger" style={mystyle.alertBox}>
                {(messages.length > 0)? <List items={messages}/> : status}
            </Alert>
        </>)
    } else {
        return null
    }
}


export default DisplayMessage;