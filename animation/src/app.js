// set transition rules
var t = d3.transition().delay(1000).duration(1000);

function go() {
  // change selected elements
  d3.selectAll(".block").transition(t).style("width", "400px");
  d3.select(".a").transition(t).style("background", "pink");
  d3.select(".b").transition(t).style("background", "gray");
}
