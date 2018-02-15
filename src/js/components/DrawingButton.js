import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class DrawingButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    onclick = () => {
        const {lmap} = this.props,
            {active} = this.state;

        console.log(active);

        this.setState({
            active: !active,

        });

        !active && lmap.gmxDrawing.create('Polyline', {/*options*/});
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
