(function(window,document) {
	'use strict';

	var map, nextMarkers = [],
		markers = [],
		NUM_LOCATIONS = 6,
		locationData = {},
		listItems;

	/*function applyMarkerListener(marker) {
		var infowindow = new google.maps.InfoWindow();
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(this.content);
			infowindow.open(map, this);
		});
	}*/

	function placeMarkers() {
		/*global alert, google, MarkerWithLabel, locations*/
		var bounds = new google.maps.LatLngBounds();
		listItems.innerHTML = '';//clear the list

		for (var i = markers.length; i < NUM_LOCATIONS; ++i) {
			var loc = new google.maps.LatLng(nextMarkers[i].lat, nextMarkers[i].long);
			var image = new google.maps.MarkerImage('images/marker.png',
				new google.maps.Size(33, 45),
				new google.maps.Point(0, 0),
				new google.maps.Point(10, 34));

			var marker = new MarkerWithLabel({
				position: loc,
				labelContent: (i + 1), //not starting with 0
				labelClass: 'labels',
				labelColor: 'ff0000',
				labelAnchor: new google.maps.Point(0, 26),
				icon: image,
				map: map,
				title: 'Fidelity'
			});
			//log(Math.round(nextMarkers[i].distance*10)/10);
			markers.push(marker);
			bounds.extend(loc);
			map.fitBounds(bounds);

			//this is what will be shown in the info window
			var additional = (nextMarkers[i].addl !== '') ? nextMarkers[i].addl + '<br>' : '';
			var infoWindowStr = '<div class="marker-content">' +
				'<span class="marker-title">Fidelity<\/span>' +
				'<span class="marker-copy">' + nextMarkers[i].street + '<\/span>' +
				'<span class="marker-copy">' + additional + '<\/span>' +
				'<span class="marker-copy">' + nextMarkers[i].city + ', ' + nextMarkers[i].state + '<\/span>' +
				'<\/div>';
			marker.content = infoWindowStr;

			var infowindow = new google.maps.InfoWindow();
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.setContent(this.content);
				infowindow.open(map, this);
			});

			//this is what appears below the map as a list
			additional = (nextMarkers[i].addl !== '') ? nextMarkers[i].addl + '<br>' : '';
			var listContent = '<li class="list-item">' +
			'<div class="list-marker">' + (i + 1) + '</div>' +
			'<span class="list-title">' + nextMarkers[i].city + ' ' + nextMarkers[i].state + '<\/span>' +
				'<span class="list-copy">' + nextMarkers[i].street + '<\/span>' +
				'<span class="list-copy">' + additional + '<\/span>' +
				'<span class="list-copy">Phone: ' + nextMarkers[i].phone + '<\/span>' +
				'<span class="list-copy">Approx Distance: ' + Math.round(nextMarkers[i].distance*10)/10 + '<\/span>' +
				'<span class="list-copy other">'+
                    '<span class="location">Location Details</span><span class="line">|</span>'+
                    '<span class="directions">Directions</span>'+
                '</span>'+
				'<\/li>';

			listItems.innerHTML += listContent;
		}

		map.setCenter(new google.maps.LatLng(locationData.lat, locationData.lng));
	}

	function rad(x) {
		return x * Math.PI / 180;
	}
	//haversine formula
	function findClosest() {
		var lat = locationData.lat;
		var lng = locationData.lng;
		var R = 6371; // radius of earth in km
		var distances = [];
		for (var i = 0; i < locations.length; ++i) {
			var mlat = locations[i].lat;
			var mlng = locations[i].long;
			var dLat = rad(mlat - lat);
			var dLong = rad(mlng - lng);
			var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
				Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
			var d = R * c;
			locations[i].distance = d;
			//log('city: '+locations[i].city+', state: '+locations[i].state+', d: '+d+', idx: '+i);
			distances.push({
				distance: d,
				idx: i
			});
		}

		var temp = distances.sort(function(a, b) {return a.distance - b.distance});
		if (nextMarkers.length > 0) {
			for (var k = 0; k < markers.length; ++k) {
				markers[k].setMap(null);
			}
			markers.length = 0;
			nextMarkers = [];
		}
		for (var j = 0; j < NUM_LOCATIONS; ++j) {
			//log('::::::::::::::::::: city: '+locations[temp[j].idx].city+', d: '+temp[j].distance+', idx: '+temp[j].idx);
			nextMarkers.push(locations[temp[j].idx]);
		}

		placeMarkers();
	}

	function validZip(zip) {
		return (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip));
	}

	function lookupByZip(zip) {
		var _zip = (zip) ? zip : '02113';
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({
				address: _zip
			},
			function(results_array, status) {
				if(status === google.maps.GeocoderStatus.OK) {
					//map.setCenter(results_array[0].geometry.location);
					locationData.lat = results_array[0].geometry.location.lat();
					locationData.lng = results_array[0].geometry.location.lng();

					findClosest();
				} else {
					log('status: ' + status);
				}
			});
	}

	function handleZipSearch() {
		var zip = document.querySelectorAll('[data-role="zip"]')[0].value;
		if (validZip(zip)) {
			lookupByZip(zip);
		} else {
			alert('Please enter a valid zip');
			return;
		}
	}

	function lookupByGeo() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			alert('Geolocation not supported.\nPlease enter your zip.');
		}

		function success(position) {
			var geocoder = new google.maps.Geocoder(),
				acc = position.coords.accuracy,
				latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			geocoder.geocode({
					'latLng': latlng
				},
				function(results_array, status) {
					if (status === google.maps.GeocoderStatus.OK) {
						//map.setCenter(results_array[0].geometry.location);
						locationData.lat = results_array[0].geometry.location.lat();
						locationData.lng = results_array[0].geometry.location.lng();

						findClosest();
					} else {
						log('status: ' + status);
					}
				});
		}

		function error(msg) {
			alert('An error occurred: ' + msg);
		}
	}

	function initialize() {
		var mapOptions = {
			center: new google.maps.LatLng(42.355682, -71.055657),
			zoom: 8,
			disableDefaultUI: true
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		lookupByZip();
		//lookupByZip('10065');
		//lookupByGeo();
	}

	listItems = document.querySelectorAll('.list-items')[0];
	var searchButton = document.querySelectorAll('.search-btn')[0];
	searchButton.addEventListener('click',handleZipSearch);
	var geoButton = document.querySelectorAll('.location-ico')[0];
	geoButton.addEventListener('click',lookupByGeo);
	google.maps.event.addDomListener(window, 'load', initialize);
})(window,document);
