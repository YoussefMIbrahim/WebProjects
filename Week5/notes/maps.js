let metroAreaCenterCoordinates = [44.96, -93.2];
let zoomLevel = 9;

let map = L.map('college-map').setView(metroAreaCenterCoordinates,zoomLevel);

// add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    // access token from mapbox
    accessToken: 'pk.eyJ1IjoieWlicmFoaW0iLCJhIjoiY2s2bGVvZDZxMGExdzNscGZkdzQ2cWlwcSJ9.oCwVpKsQMjr7ieODGm8smQ'
}).addTo(map);

