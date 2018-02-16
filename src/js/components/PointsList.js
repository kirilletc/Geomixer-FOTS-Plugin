import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Input from './Input';

const PointsList = (props) => {
    const points = props.points.map(point => {
        return (
            <div key={point.x ? point.x : Math.random()*100}>
                <Input placeholder="x:" value={point.x} />
                <Input placeholder="y:" value={point.y} />
            </div>
        )
    })

    return (
        <div>
            {points}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        points: state.points
    }
}

export default connect(mapStateToProps)(PointsList);
