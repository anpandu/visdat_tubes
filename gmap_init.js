
var startx = -6.891012511085037;
var starty = 107.61185720516065;
var startzoom = 3;

function initialize() {
	var gmapOptions = {
		center: new google.maps.LatLng(startx, starty),
		zoom: startzoom,
		disableDefaultUI: true,
		scaleControl: false,
		scrollwheel: false,
	};
	var gmap = new google.maps.Map(document.getElementById("gmapcanvas"), gmapOptions);	

	var regs = Object.keys(MASTER_DATA);
	for (var i = 0; i < regs.length; i++) {
		var marker = new google.maps.Marker({
		    position: new google.maps.LatLng(-25.363882+i*10,131.044922+i*10),
		    title: regs[i],
    		animation: google.maps.Animation.DROP,
		});
		marker.setMap(gmap);
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				drawChart(marker.title.toLowerCase());
				marker.setAnimation(google.maps.Animation.BOUNCE);
				setTimeout(function(){marker.setAnimation(null)}, 3000);
			}
		})(marker, i));
	};
}		

function toogleBounce (marker) {
	if (marker.getAnimation() != null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}

google.maps.event.addDomListener(window, 'load', initialize);
		