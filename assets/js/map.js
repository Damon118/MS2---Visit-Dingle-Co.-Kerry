let map;
let infoObject = [];
let centerCords = {

    lat: 52.14533445,
    lng: -9.517401092833236
};
let markersOnMap = [{
    placeName: "Killarney",
    text: "Attractions include - The Lakes of Killarney, Ring of Kerry, Kerry Walking Trail and Killarney National Park",
    LatLng: [{
        lat: 52.0595746,
        lng: -9.505322
    }]
},
{
    placeName: "Dingle",
    text: "Attractions include - The Dingle Peninsula, world-renowned pub culture, the Gallarus Oratory and Kilmalkedar Church",
    LatLng: [{
        lat: 52.1408381,
        lng: -10.2688831
    }]
},
{
    placeName: "Tralee",
    text: "Attractions include - The Rose of Tralee Festival, Kerry County Museum and Tralee Town Park",
    LatLng: [{
        lat: 52.2692835,
        lng: -9.7054085
    }]
},
{
    placeName: "Listowel",
    text: "Attractions include - Listowel Castle, Kerry Writer's Museum and St. John's Art amd Heritage Centre",
    LatLng: [{
        lat: 52.4472298,
        lng: -9.4846811
    }]
},
];

window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for (let i = 0; i < markersOnMap.length; i++) {
        let contentString = '<div id="content"><h2>' + markersOnMap[i].placeName +
            '</h2><p>' + markersOnMap[i].text + '</p></div>';

        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        marker.addListener('click', function () {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            infoObject[0] = infowindow;
        });
    }
}

function closeOtherInfo() {
    if (infoObject.length > 0) {
        infoObject[0].set("marker", null);
        infoObject[0].close();
        infoObject.length = 0;
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: centerCords
    });
    addMarkerInfo();
}

document.getElementById("btn-killarney").addEventListener("click", initMapKillarney);

function initMapKillarney() {
    const killarney = { lat: 52.0595746, lng: -9.505322 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: killarney,
    });
    const marker = new google.maps.Marker({
        position: killarney,
        map: map,
    });
}





/* function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 52.14533445,
            lng: -9.517401092833236
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
            {lat: 52.0595746, lng: -9.505322}, 
            {lat: 52.1408381, lng: -10.2688831},
            {lat: 52.2692835, lng: -9.7054085},
            {lat: 52.4472298, lng: -9.4846811}, 
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

var locationsMap = [{
    location: "Killarney",
    description: "Placeholder",
    LatLng: [{
        lat: 52.0595746,
        lng: -9.505322
    }],

},
{
    location: "Dingle",
    description: "Placeholder",
    LatLng: [{
        lat: 52.1408381,
        lng: -10.2688831
    }],

},
    {
    placeName: "Tralee",
    description: "Placeholder",
    LatLng: [{
        lat: 52.2692835,
        lng: -9.7054085
    }],
},
{
    placeName: "Kenmare",
    description: "Placeholder",
    LatLng: [{
        lat: 52.4472298,
        lng: -9.4846811
    }]
},
]; */




