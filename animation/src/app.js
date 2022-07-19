var data = [
  { name: "Yuxin", maths: 98, science: 100, language: 99 },
  { name: "Billy", maths: null, science: 34, language: 85 },
  { name: "Cindy", maths: 86, science: 48, language: null },
  { name: "David", maths: 44, science: null, language: 65 },
  { name: "Emily", maths: 59, science: 73, language: 29 },
];

var margin = { top: 10, right: 10, bottom: 30, left: 30 };
var width = 400 - margin.left - margin.right;
var height = 535 - margin.top - margin.bottom;

var svg = d3
  .select(".chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .call(responsivefy)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

var xScale = d3
  .scaleBand()
  .domain(data.map((d) => d.name))
  .range([0, width])
  .padding(0.2);
svg
  .append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));

var yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);
svg.append("g").call(d3.axisLeft(yScale));

function render(subject = "science") {
  let update = svg.selectAll("rect").data(data.filter((d) => d[subject]));

  update.exit().remove();
  let enter = update.enter().append("rect");

  update
    .merge(enter)
    .attr("x", (d) => xScale(d.name))
    .attr("y", (d) => yScale(d[subject]))
    .attr("width", (d) => xScale.bandwidth())
    .attr("height", (d) => height - yScale(d[subject]));
}

render();

function responsivefy(svg) {
  // get container + svg aspect ratio
  var container = d3.select(svg.node().parentNode),
    width = parseInt(svg.style("width")),
    height = parseInt(svg.style("height")),
    aspect = width / height;

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("preserveAspectRatio", "xMinYMid")
    .call(resize);

  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on("resize." + container.attr("id"), resize);

  // get width of container and resize svg to fit it
  function resize() {
    var targetWidth = parseInt(container.style("width"));
    svg.attr("width", targetWidth);
    svg.attr("height", Math.round(targetWidth / aspect));
  }
}
