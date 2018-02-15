import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class DrawingButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            drawing: null
        };

        this.props.lmap.gmxDrawing.on('drawstop', this.ondrawstop);
    }

    ondrawstop = (e) => {
        this.setState({
            active: false,
            drawing: e.target
        });

    }

    onclick = (e) => {
        const {lmap} = this.props,
            {active} = this.state;

        this.setState({
            active: !active
        });

        if (!active) {
            let feature = lmap.gmxDrawing.create('Polyline', {maxPoints: 5});
        }

    }

    render() {
        const {active} = this.state,
            txt = active ? "Линия рисуется" : "Нарисуйте линию";

        return (
            <Button
                active={active}
                onClick={this.onclick}
            >
                {txt}
            </Button>
        );
    }
}
export default DrawingButton;
