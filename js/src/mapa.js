function initialize() {
	var latlng = new google.maps.LatLng(48.010543, 23.575587);
	var settings = {
		zoom: 15,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h1 id="firstHeading" class="firstHeading1"></h1>'+
		'<h1 id="firstHeading" class="firstHeading">WEB Peteichuk</h1>'+
		'<div id="bodyContent">'+
		'<p>Одно из мест встреч, и оно может быть не единственное.</p>'+
		'</div>'+
		'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	
	var companyImage = new google.maps.MarkerImage('images/logos.png',
		new google.maps.Size(100,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);

	var companyShadow = new google.maps.MarkerImage('images/logo_shadow.png',
		new google.maps.Size(130,50),
		new google.maps.Point(0,0),
		new google.maps.Point(65, 50));

	var companyPos = new google.maps.LatLng(48.010543, 23.575587);

	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,
		shadow: companyShadow,
		title:"WEB Peteichuk",
		zIndex: 3});

	var parkingImage = new google.maps.MarkerImage('images/parking.png',
		new google.maps.Size(50,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);

	var parkingShadow = new google.maps.MarkerImage('images/parking_shadow.png',
		new google.maps.Size(70,50),
		new google.maps.Point(0,0),
		new google.maps.Point(60, 50)
	);

	var parkingPos = new google.maps.LatLng(48.010736, 23.575284);

	var parkingMarker = new google.maps.Marker({
		position: parkingPos,
		map: map,
		icon: parkingImage,
		shadow: parkingShadow,
		title:"Места для парковки",
		zIndex: 1
	});
	
	google.maps.event.addListener(companyMarker, 'click', function() {
		infowindow.open(map,companyMarker);
	});
}