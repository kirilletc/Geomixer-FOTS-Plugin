import React from 'react';
import PropTypes from 'prop-types';
import App from './App'
import store from '../store'
import { Provider } from 'react-redux';

function Root(props) {
    console.log(props);
    return (
        <Provider store={store}>
            <App lmap={props.lmap}/>
        </Provider>
    )
}

Root.propTypes = {
}

export default Root;