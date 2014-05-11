
			google.load("visualization", "1", {packages:["corechart"]});
			var options = {
			  title: 'School Enrollment',
			  hAxis: {title: 'tahun', titleTextStyle: {color: 'black'}}
			};
			var options2 = {
			  title: 'Infant Death',
			  hAxis: {title: 'tahun', titleTextStyle: {color: 'black'}}
			};
			google.setOnLoadCallback(begin);
			function begin () {
				drawChart('indonesia');
			}
			function drawChart(_reg) {
				var reg = (_reg!="") ? _reg : "indonesia";
				var gdata = google.visualization.arrayToDataTable(MASTER_DATA[reg]["se"]);
				var gdata2 = google.visualization.arrayToDataTable(MASTER_DATA[reg]["id"]);
				var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
				var chart2 = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
				chart.draw(gdata, options);
				chart2.draw(gdata2, options2);
			}