import React from 'react';
import { FormControl } from 'react-bootstrap'

const Input = (props) => {
    return (
        <FormControl onChange={props.onChange} />
    );
}

export default Input;
