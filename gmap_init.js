
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
			}			
			google.maps.event.addDomListener(window, 'load', initialize);
		