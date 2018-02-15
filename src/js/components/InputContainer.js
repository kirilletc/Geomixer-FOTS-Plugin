import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import { withLabel } from '../HOC';
import { changeHoursStep, changeName } from '../AC';

const mapStateToProps = (state, ownProps) => {
    return {
        label: ownProps.label
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunc = ownProps.param === 'step' ? changeHoursStep : changeName;

    return {
        onChange: e => {
            dispatch(dispatchFunc(e.target.value))
        }
    }
}

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(withLabel(Input));

export default InputContainer;
