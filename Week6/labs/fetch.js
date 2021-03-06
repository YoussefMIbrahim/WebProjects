let  url =  "https://api.wheretheiss.at/v1/satellites/25544";

let issLat = document.querySelector("#iss-lat");
let issLong = document.querySelector("#iss-long");

let issMarker;
let update = 10000;

let map = L.map('iss-map').setView([0,0],1);

let date_time = document.querySelector("#update-time");

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    // access token from mapbox
    accessToken: 'pk.eyJ1IjoieWlicmFoaW0iLCJhIjoiY2s2bGVvZDZxMGExdzNscGZkdzQ2cWlwcSJ9.oCwVpKsQMjr7ieODGm8smQ'
}).addTo(map);

let icon = L.icon({
    iconUrl:"iss_icon.png",
    iconSize: [50,50],
    iconAnchor: [25,25]
});

let maxFailedAttempts = 3;

iss(maxFailedAttempts) ;// soi dont have to wait 10 second for things to start loading




function iss(attempts) {
    fetch(url)
        .then(res => res.json())
        .then(issData => {
            console.log(issData);
            let lat = issData.latitude;
            let long = issData.longitude;
            issLat.innerHTML = lat;
            issLong.innerHTML = long;

            if (!issMarker){
                issMarker = L.marker([lat,long], {icon: icon}).addTo(map)
            }else{
                issMarker.setLatLng([lat,long])
            }


            date_time.innerHTML = Date();

        })
        .catch(err => {
            console.log(err)
        })
        .finally(()=> {

            setTimeout(iss,update,attempts)
        })

}