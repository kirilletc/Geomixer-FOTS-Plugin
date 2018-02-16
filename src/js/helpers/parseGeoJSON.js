const parseGeoJSON = geoJSON => {
    return geoJSON.geometry.coordinates.map(point => {
        return {x: point[0], y: point[1]}
    });
}

export default parseGeoJSON;
