// array of all the bridges used
let bridges = [
    {'name': 'Verrazano-Narrows Bridge','cit/state':'New York,NY','span':'1298.4','location':[40.6066, -74.0447]},
    {'name': 'Golden Gate Bridge','cit/state':'San Francisco and Marin, CA','span':'1280.2','location':[37.8199, -122.4783]},
    {'name': 'Mackinac Bridge','cit/state':'Mackinaw and St Ignace, MI','span':'1158.0','location':[45.8174, -84.7278]},
    {'name': 'George Washington Bridge','cit/state':'New York, NY and New Jersey, NJ','span':'1067.0','location':[ 	40.8517, -73.9527]},
    {'name': 'Tacoma Narrows Bridge','cit/state':'Tacoma and Kitsap, WA','span':'853.44','location':[47.2690, -122.5517]}
];
// variables for the map coordinates zoom level and the actual map-
let map_coordinates = [39.381266,-97.922211];
let zoomLevel = 4;
let map = L.map('bridges-map').setView(map_coordinates,zoomLevel);

// adding mapbox kind of unsure exactly how that is happening however
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    // access token from mapbox
    accessToken: 'pk.eyJ1IjoieWlicmFoaW0iLCJhIjoiY2s2bGVvZDZxMGExdzNscGZkdzQ2cWlwcSJ9.oCwVpKsQMjr7ieODGm8smQ'
}).addTo(map);

// creating the bridge icon
let bridgeIcon = L.icon({
    // giving the bridge icon it's options such as url size and anchor
    iconUrl: "bridge.png",

    iconSize:[30,30],

});
// looping over the bridges array
bridges.forEach(function (bridge) {
    // adding every marker inside the array to the map with a formatted popup
   let marker = L.marker(bridge['location'],{icon:bridgeIcon})
       .bindPopup(`${bridge['name']}, ${bridge['cit/state']} <br> Span: ${bridge['span']}`)
       .addTo(map)
});

// getting the canvas from the html by id and setting the context
let canvas = document.querySelector('#bridge-chart');
let ctx = canvas.getContext('2d');

// making a new chart
chart = new Chart(ctx,{
   type:'bar', //setting the type of chart
   data:{
       labels:[bridges[0].name,bridges[1].name,bridges[2].name,bridges[3].name,bridges[4].name], // adding all the labels used in the chart
       datasets:[{
           label:'Span', // what each bar in the chart represents
           data:[bridges[0].span,bridges[1].span,bridges[2].span,bridges[3].span,bridges[4].span], // the length of the bridges
           backgroundColor:['Red','Green','Blue','Yellow','Purple'] // setting the background color for ever bar in order
       }]
   },
    // noooooooooooooooooooooooot really sure what's happening down here
   options:{
       scales:{
           yAxes:[{
               ticks:{
                   beginAtZero:true
               }
           }]
       }
   }
});

