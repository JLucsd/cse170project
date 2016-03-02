// Get all of our friend data
'use strict';

/*exports.view = function(req, res){
	res.render('visualization',data);
};*/

function drawg(){
    $.get( "/getjson",test)
       /*$.each( data, function( key, val ) {
    //items.push( "<li id='" + key + "'>" + val + "</li>" );
    console.log(key);
    console.log(value);
  });*/
/*{
    result = JSON.parse(data);
    alert(result.name);
    }
      );*/

    var time_arr = [4,5,3.6,3];
    
}

function test (resp)
{
  var i;
  var list=[];
  var x = new Array(resp.length + 1);
  for (var i = 0; i < x; i++) {
  x[i] = new Array(3);
}
x[0] = ["Element", "Density", { role: "style" } ];
  //console.log(resp);  
  for(i=0;i<resp.length;i++)
    {var name = resp[i];
list.push(name["name"]);
list.push(name["description"]);
list.push(name["imageURL"]);
x[i+1]=list;
  //console.log(x[i]);
  list=[];
}
console.log(x);
google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable(x);
"Element", "Density", { role: "style" } 
;      var view = new google.visualization.DataView(data);
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
          ['Mood', 'Resources Spent'],
          [ 2.5,      12],
          [ 4,      5.5],
          [ 1,     14],
          [ 4,      5],
          [ 3,      3.5],
          [ 1.5,    7]
        ]);

        var options = {
          title: 'Mood vs. Time*Money comparison',
          hAxis: {title: 'Mood (0-5) 0:Sad 5:Very Happy', minValue: 0, maxValue: 5},
          vAxis: {title: 'Time*Money', minValue: 0, maxValue: 15},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }
  }
}