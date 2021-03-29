function initMap() {
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
];




