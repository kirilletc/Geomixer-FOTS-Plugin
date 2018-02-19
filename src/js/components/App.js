import React, { Component } from 'react';
import InputContainer from './InputContainer';
import CheckboxContainer from './CheckboxContainer';
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
                <h2>Введите координаты</h2>
                <SourceTab lmap={this.props.lmap} />
                <InputContainer param="step" label="Шаг по времени" />
                <InputContainer param="name" label="Имя замера" />
                <CheckboxContainer param="countWind" label="Учитывать ветер" />
                <CheckboxContainer param="reverseCalc" label="Обратный расчет" />
                <CheckboxContainer param="countCurrents" label="Учитывать геострофические течения" />
            </div>
        );
    }
}
export default App;
