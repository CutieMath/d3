function go() {
  // set transition rules
  var t = d3.transition().delay(1000).duration(1000);
  // change selected elements
  d3.selectAll(".block").transition(t).style("width", "400px");
  d3.select(".a").transition(t).style("background", "pink");
  d3.select(".b").transition(t).style("background", "gray");
}

function config(t, delay, duration) {
  return t.delay(delay).duration(duration);
}

function goNow() {
  d3.selectAll(".block")
    .transition()
    .call(config, 1000, 1000)
    .style("height", "300px");
}
