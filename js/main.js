
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.070371, lng: 33.405709},
            zoom: 18
    });
    marker = new google.maps.Marker({
        position: {lat: 49.070371, lng: 33.405709},
            map: map,
            icon: {
                    url: "img/favicon.png"
                }
            })
        }

var gallery = document.querySelector('#portfolio-works');
var msnry = new Masonry(gallery, {
    columnWidth: 5,
    itemSelector: '.portfolio-works__item',
})