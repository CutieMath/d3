d3.select("#block")
  .transition()
  .duration(500)
  .delay(750)
  .ease(d3.easeCubicOut)
  .style("width", "400px")
  .style("height", "600px");
