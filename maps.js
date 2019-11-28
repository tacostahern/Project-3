function initMap()
{

  var iit = {
    lat: 41.8349,
    lng: -87.6270
  };
  var map = new google.maps.Map(document.getElementById('map'),
  {
    center:
    {
      lat: 41.8349,
      lng: -87.6270
    },
    zoom: 10,
    styles: [
    {
      elementType: 'geometry',
      stylers: [
      {
        color: '#242f3e'
      }]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
      {
        color: '#242f3e'
      }]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
      {
        color: '#746855'
      }]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
      {
        color: '#d59563'
      }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
      {
        color: '#d59563'
      }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
      {
        color: '#009900'
      }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
      {
        color: '#6b9a76'
      }]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
      {
        color: '#38414e'
      }]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
      {
        color: '#212a37'
      }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
      {
        color: '#9ca5b3'
      }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
      {
        color: '#746855'
      }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
      {
        color: '#1f2835'
      }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
      {
        color: '#f3d19c'
      }]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
      {
        color: '#2f3948'
      }]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
      {
        color: '#d59563'
      }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
      {
        color: '#800000'
      }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
      {
        color: '#515c6d'
      }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
      {
        color: '#17263c'
      }]
    },
    {
      featureType: 'transit',
      elementType: 'transit.line',
      stylers: [
      {
        color: '#6E2C7A'
      }]
    }]
  });


  var contentString = '<p>This is where I go to school<p>';
  var infowindow = new google.maps.InfoWindow(
  {
    content: contentString
  });
  var marker = new google.maps.Marker(
  {
    position: iit,
    map: map,
    title: 'Illinois Institute of Technology'
  });
  marker.addListener('click', function ()
  {
    infowindow.open(map, marker);
    map.setZoom(18);
    map.setCenter(marker.getPosition())
  });
  
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
  
  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}