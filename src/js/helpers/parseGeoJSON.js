const parseGeoJSON = geoJSON => {
    return geoJSON.geometry.coordinates.map((point, index) => {
        return {id: index, x: point[0], y: point[1]}
    });
}

export default parseGeoJSON;
