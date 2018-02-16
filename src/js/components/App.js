import React, { Component } from 'react';
import DrawingButton from './DrawingButton';
import InputContainer from './InputContainer';
import Input from './Input';
import { Grid, Col, Row }  from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStyleIndex: 0,
            attrs: []
        };
    }

    render() {
        //console.log(rb.Grid);
        return (
            //<div>
                //<DrawingButton lmap={this.props.lmap}/>
                //<InputContainer param="step" label="Шаг по времени"/>
                //<InputContainer param="name" label="Имя замера"/>
            //</div>

            <Grid>
                <Row>
                    <Col md={6}>
                         <DrawingButton lmap={this.props.lmap}/>
                    </Col>
                    <Col md={6}>
                        <DrawingButton lmap={this.props.lmap}/>
                    </Col>

                </Row>

                <Row>
                    <Col md={12}>
                         <InputContainer param="step" label="Шаг по времени"/>
                    </Col>

                </Row>

                <Row>
                    <Col md={12}>
                         <InputContainer param="name" label="Имя замера"/>
                    </Col>

                </Row>
            </Grid>












        );
    }
}
export default App;

