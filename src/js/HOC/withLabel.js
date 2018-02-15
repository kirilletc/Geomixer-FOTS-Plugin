import React, { Component } from 'react';
import { ControlLabel } from 'react-bootstrap'

export const withLabel = (InnerComponent) => {
    return class WithLabel extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <div>
                    <ControlLabel>
                        {this.props.label}
                    </ControlLabel>
                    <InnerComponent onChange={this.props.onChange}/>
                </div>
            );
        }
    }
}
