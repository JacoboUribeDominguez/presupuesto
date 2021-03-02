import React from 'react'
import PropTypes from 'prop-types'

import { Form } from 'react-bootstrap'

const Error = ({texto}) => {
    return (
        <Form.Text className="text-danger">
            ERROR: {texto}
        </Form.Text>
    )
}

Error.propTypes = {
    texto : PropTypes.string.isRequired
}

export default Error;