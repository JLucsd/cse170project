// Get all of our friend data
var data = require('../store.json');

exports.view = function(req, res){
	
	//var rand = data["friends"];
	//res.json(rand["name"]);
	res.render('visualization',data);
};


/*
    var time_arr = [4,5,3.6,3];
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Ralps", desc, "#b87333"],
        ["Vons", document.getElementById("description").innerHTML, "silver"],
        ["Costco", 3.5, "gold"],
        ["Traders Joe", 3, "color: #e5e4e2"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Monthly time consumption at Grocery Stores",
        width: 450,
        height: 350,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options);

      google.charts.setOnLoadCallback(drawChart1);
      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Ralps(Jan 2nd)',     2],
          ['Ralps(Jan 10th)',      1],
          ['Vons(Jan 22nd)',  1.5],
          ['Costco(Feb 7th)', 1.5],
          ['Ralps(Feb 12th)',    2]
        ]);

        var options = {
          title: 'Time spent on Grocery Shopping',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
      google.charts.setOnLoadCallback(drawChart2);
      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Age', 'Weight'],
          [ 8,      12],
          [ 4,      5.5],
          [ 10,     14],
          [ 4,      5],
          [ 3,      3.5],
          [ 6.5,    7]
        ]);

        var options = {
          title: 'Mood vs. Time*Money comparison',
          hAxis: {title: 'Mood', minValue: 0, maxValue: 10},
          vAxis: {title: 'Time*Money', minValue: 0, maxValue: 15},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }
  }
*/