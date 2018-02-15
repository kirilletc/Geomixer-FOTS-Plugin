import React, { Component } from 'react';
import DrawingButton from './DrawingButton';

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
            </div>
        );
    }
}
export default App;
