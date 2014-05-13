
google.load("visualization", "1", {packages:["corechart"]});
var options = {
	title: 'School Enrollment',
	hAxis: {title: 'tahun', titleTextStyle: {color: 'gray'}},
	colors: ['#ffcc00', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
	backgroundColor: 'transparent',
	legend: {position: 'none'},
	titlePosition: 'in'
};
var options2 = {
	title: 'Infant Death',
	hAxis: {title: 'tahun', titleTextStyle: {color: 'gray'}},
	colors: ['#663333', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
	backgroundColor: 'transparent', //#B3D1FF
	legend: {position: 'none'},
	titlePosition: 'out'
};

google.setOnLoadCallback(begin);
function begin () {
	drawChart('Indonesia');
}
function drawChart(_reg) {
	var reg = (_reg!="") ? _reg : "Indonesia";
	var gdata = google.visualization.arrayToDataTable(MASTER_DATA[reg]["se"]);
	var gdata2 = google.visualization.arrayToDataTable(MASTER_DATA[reg]["id"]);
	var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	var chart2 = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
	chart.draw(gdata, options);
	chart2.draw(gdata2, options2);
	document.getElementById('reg_name').innerHTML = _reg.toUpperCase();
}