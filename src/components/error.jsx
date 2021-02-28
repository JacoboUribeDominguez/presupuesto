import React from 'react'
import { Form } from 'react-bootstrap'

const Error = ({texto}) => {
    return (
        <Form.Text className="text-danger">
            ERROR: {texto}
        </Form.Text>
    )
}

export default Error;