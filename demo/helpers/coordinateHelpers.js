import { overlayLonOffset } from "../consts/rotationOffset";

export const to3dLocation = (coords, radius) => {
    const modLon = coords.lon + overlayLonOffset;
    var cosLat = Math.cos(toRadians(coords.lat));
    var sinLat = Math.sin(toRadians(coords.lat))
    var cosLon = Math.cos(toRadians(modLon))
    var sinLon = Math.sin(toRadians(modLon))
    return [
        radius * cosLat * sinLon, 
        radius * sinLat,
        radius * cosLat * cosLon
    ];
}

export const midpoint = (coord1, coord2, percent) => {
    var midpoint = { coordinates : {lat : coord1.lat + (coord2.lat - coord1.lat) * percent, lon: coord1.lon + (coord2.lon - coord1.lon) * percent }};
    return midpoint;
}

export const distanceBetweenPoints = (coord1, coord2, radius) => {
    const R = radius; 
    const φ1 = toRadians(coord1.lat);
    const φ2 = toRadians(coord2.lat);
    const Δφ = toRadians(coord2.lat - coord1.lat);
    const Δλ = toRadians(coord2.lon - coord1.lon);
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    return d;
}

export const toRadians = (angle) => {
    return angle * (Math.PI / 180);
}
