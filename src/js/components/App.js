import React, { Component } from 'react';
import DrawingButton from './DrawingButton';
import InputContainer from './InputContainer';
import Input from './Input';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStyleIndex: 0,
            attrs: []
        };
    }

    render() {
        return (
            <div>
                <DrawingButton lmap={this.props.lmap}/>
                <InputContainer param="step" label="Шаг по времени"/>
                <InputContainer param="name" label="Имя замера"/>
            </div>
        );
    }
}
export default App;

