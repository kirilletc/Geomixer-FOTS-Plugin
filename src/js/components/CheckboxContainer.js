import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cbox from './Checkbox';
import * as actionCreators from '../AC';

const mapStateToProps = (state, ownProps) => {
    const { param } = ownProps;

    return { value: state[param] };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { param } = ownProps;
    const dispatchFunc = actionCreators[param];
    console.log(dispatchFunc);

    return {
        onChange: e => {
            const value = e.target.checked;
            console.log(value);
            dispatch(dispatchFunc(value));
        }
    }
}

const CheckboxContainer = connect(mapStateToProps, mapDispatchToProps)(Cbox);

export default CheckboxContainer;
