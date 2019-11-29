function initMap() {
  	var tulika = {lat: 59.429, lng: 24.719};
  	var map = new google.maps.Map(
      	document.getElementById('map'), {zoom: 15, center: tulika});
  	var marker = new google.maps.Marker({position: tulika, map: map});
}