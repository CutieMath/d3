// 3rd June
let margin = { top: 30, right: 30, bottom: 60, left: 30 };
let width = 425 - margin.left - margin.right;
let height = 625 - margin.top - margin.bottom;

let svg = d3
  .select(".chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// dummy data
var data = [
  { score: 100, subject: "Reading" },
  { score: 82, subject: "Geography" },
  { score: 74, subject: "Spelling" },
  { score: 99, subject: "Mathematics" },
  { score: 100, subject: "Science" },
];
svg
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .style("fill", "pink")
  .style("stroke", "black");

// Create Y axis
let yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);
let yAxis = d3.axisLeft(yScale).ticks(10); // specify tick values use tickValues
svg.call(yAxis);

// Creat X axis
let xScale = d3
  .scaleBand()
  .padding(0.1)
  .paddingOuter(0.5)
  .domain(data.map((d) => d.subject))
  .range([0, width]);

let xAxis = d3.axisBottom(xScale).ticks(5).tickPadding(15);
svg
  .append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(xAxis)
  .selectAll("text")
  .style("text-anchor", "end")
  .attr("transform", "rotate(-45)");

svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d) => xScale(d.subject))
  .attr("y", (d) => yScale(d.score))
  .attr("width", (d) => xScale.bandwidth())
  .attr("height", (d) => height - yScale(d.score)); // inverse the y value

// let scores = [
//   { name: "Yuxin", score: 100 },
//   { name: "Mimi", score: 100 },
//   { name: "Cindy", score: 91 },
//   { name: "David", score: 96 },
//   { name: "Byron", score: 100 },
// ];

// with svg
// var bar = d3
//   .select(".chart")
//   .append("svg")
//   .attr("width", 225)
//   .attr("height", 300)
//   .selectAll("g")
//   .data(scores)
//   .enter()
//   .append("g")
//   .attr("transform", (d, i) => "translate(0, " + i * 33 + ")");

// function scaleBar(selection, scale) {
//   selection.style("transform", "scaleX(" + scale + ")");
// }

// function fade(selection, opacity) {
//   selection.style("fill-opacity", opacity);
// }

// function setFill(selection, color) {
//   selection.style("fill", color);
// }

// bar
//   .append("rect")
//   .style("width", (d) => d.score)
//   .attr("fill", "pink")
//   .attr("class", "bar")
//   .on("mouseover", function (d, i, elements) {
//     d3.select(this).call(scaleBar, 2).call(setFill, "white");
//     d3.selectAll(elements).filter(":not(:hover)").call(fade, 0.5);
//   })
//   .on("mouseout", function (d, i, elements) {
//     d3.select(this).call(scaleBar, 1).call(setFill, "pink");
//     d3.selectAll(elements).call(fade, 1);
//   });

// bar
//   .append("text")
//   .attr("y", 20)
//   .text(function (d) {
//     return d.name;
//   });

// Selection
let div = d3.select("div");
console.log(div.nodes());

let divLinks = div.selectAll("a");
console.log(divLinks.nodes());

// modify a doc
let secondLink = d3
  .selectAll("a:nth-child(2)")
  .attr("href", "https://google.com")
  .style("color", "green")
  .text("Just changed text");
// console.log(secondLink.attr("href"));

// Linear Scale
let linearScale = d3.scaleLinear().domain([0, 100]).range([0, 600]).clamp(true);
console.log("Linear Scale");
console.log(linearScale(50));
console.log(linearScale(-50));
console.log(linearScale(100));
console.log(linearScale(103));

// Time Scale
let timeScale = d3
  .scaleTime()
  .domain([new Date(2022, 0, 1), new Date()])
  .range([0, 100]);
console.log("### Time Scale");
console.log(timeScale(new Date(2022, 5, 27)));

// Quantize Scale
let quantizeScale = d3
  .scaleQuantize()
  .domain([0, 100])
  .range(["yellow", "green"]);
console.log("### Quantize Scale");
console.log(quantizeScale(90));
console.log(quantizeScale(49));
console.log(quantizeScale(12));

// Ordinal Scale
let ordinalScale = d3
  .scaleOrdinal()
  .domain(["good", "great", "excellent"])
  .range(["red", "black", "beige"]);
console.log("### Ordinal Scale");
console.log(ordinalScale("good"));

// Read JSON
d3.json("data/data.json", function (data) {
  console.log("### Read Data");
  console.log(data);
});

// Read CSV
d3.csv("data/data.csv", function (data) {
  console.log(data);
});

// Read TSV
d3.tsv("data/data.tsv", function (data) {
  console.log(data);
});

// Data manipulation
// Min
d3.json("data/data.json", function (data) {
  let min = d3.min(data, function (d) {
    return d.age;
  });
  console.log("### Min Value");
  console.log(min);
});

// Extent
d3.json("data/data.json", function (data) {
  let extent = d3.extent(data, function (d) {
    return d.age;
  });
  console.log("### Extent array");
  console.log(extent);

  // add in linear scale
  let scale = d3.scaleLinear().domain(extent).range([0, 100]).clamp(true);
  console.log("### Linear Scale based on Extent array");
  console.log(scale(35));

  // get unique set value
  let ages = d3.set(data, function (d) {
    return d.age;
  });
  console.log("### Set");
  console.log(ages.values());
});
