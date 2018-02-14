import React from 'react';
import { render } from 'react-dom';
//import { StylesEditor } from './components/StylesEditor';

const nsGmx = window.nsGmx || {};

/**
 * res {Object} instanceof gmxMap
 */
const loadLayer = function (gmxMap) {

    //const layer = gmxMap.layersByID['05D50D053F8A495BB3F59A9AEFE976B8'],
    console.log(gmxMap);
    let obj = gmxMap.toString();

    render(
        <div>obj</div>,
        document.querySelector('.content')
    );

}

export { loadLayer };