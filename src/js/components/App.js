import React, { Component } from 'react';
import InputContainer from './InputContainer';
import SourceTab from './SourceTab';
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
                <h2>Введите ккоординаты</h2>
                <SourceTab lmap={this.props.lmap} />
                <InputContainer param="step" label="Шаг по времени"/>
                <InputContainer param="name" label="Имя замера"/>
            </div>
        );
    }
}
export default App;
