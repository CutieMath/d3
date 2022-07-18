let t = d3.transition().delay(1000).duration(1000);

d3.selectAll(".block").transition(t).style("width", "400px");
