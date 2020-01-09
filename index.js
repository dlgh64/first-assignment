//svg element of print plane and scaler function
var margin={top: 20, right: 40, bottom: 30, left: 20},
    width=960-margin.left-margin.right,
    height=500-maigin.top-margin.bottom,
    barWidth=Math.floor(width/19)-1;

var x=d3.scale.linear()
    .range([barWidth/2,width-barWidth/2]);

var y=d3.scale.linear()
    .range([height,0]);

var yAxis=d3.svg.axis()
    .scale(y)
    .orient("right")
    .tickSize(-width)
    .tickFormat(function(d){return Math.round(d/le6)+"M";});

//svg element with a bottom-right origin
var svg=d3.select("body").append("svg")
    .attr("width", width+margin.left+margin.right)
    .attr("height", height+margin.top+margin.bottom)
   .append("g")
     .attr("transform","translate("+margin.left+","+margin.top+")");

//a sliding container to hold the bars by time

