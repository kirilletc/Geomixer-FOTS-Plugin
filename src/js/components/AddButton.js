import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addPoint } from '../AC';

const AddButton = (props) => {
    return (
        <Button onClick={props.onClick}>
            {"Добавить точку"}
        </Button>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        label: ownProps.label
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: e => {
            dispatch(addPoint({x: null, y: null}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);
