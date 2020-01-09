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

//a sliding container to hold the bars by birthyear
var title=svg.append("text")
    .attr("class","title")
    .attr("dy",".71em")
    .text(2000);

d3.csv("data.csv",(error,data){
   
   //convert strings to numbers
   data.forEach(function(d){
     d.UK=+d.UK;
     d.Europe=+d.Europe;
     d.Africa=+d.Africa;
     d.Asia=+d.Asia;
     d.AmericaandOceania=+d.AmericaandOceania;
});

//update the scale domains
x.domain[data.forEach(function(d){
    d.time=+d.time})]
y.domain[0,100];

//add an axis to show the values
svg.append("g")
    .attr("class","y axis")
    .attr("transfrom","translate("+width+",0)")
    .call(yAxis)
   .selectAll("g")
   .filter(function(value){return !value;})
    .classed("zero",true);

//add labeled rect for each birthtear
var time=time.selectAll(".time")
    .data(d3.range(1997,2020,1))
   .enter().append("g")
    .attr("class","time")
    .attr("transform",function(time){return "translate("+x(time)+",0)"});

time.selectAll("rect")
    .data(function(time){return data[time]||[0];})
   .enter().append("rect")
    .attr("x",-barWidth/2)
    .attr("width",barWidth)
    .attr("y",y)
    .attr("height",function(value){return height-y(value);});

//add labels to show birth
time.append("text")
    .attr("y",height-4)
    .text(function(time){return time;});











