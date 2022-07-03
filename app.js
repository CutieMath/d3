let scores = [
  { name: "Yuxin", score: 100 },
  { name: "Mimi", score: 100 },
  { name: "Cindy", score: 91 },
  { name: "David", score: 96 },
  { name: "Byron", score: 100 },
];

// let update = d3
//   .select(".chart")
//   .selectAll("div")
//   .data(scores, function (d) {
//     return d ? d.name : this.innerText; //Check if the element already exists
//   })
//   .style("color", "blue");

// let enter = update
//   .enter()
//   .append("div")
//   .text(function (d) {
//     return d.name;
//   })
//   .style("color", "green");

// // remove redundent data
// update.exit().remove();
// // styling
// update
//   .merge(enter)
//   .style("width", (d) => d.score + "px")
//   .style("height", "50px")
//   .style("background", "pink")
//   .style("border", "1px solid black");

// with svg
var bar = d3
  .select(".chart")
  .append("svg")
  .attr("width", 225)
  .attr("height", 300)
  .selectAll("g")
  .data(scores)
  .enter()
  .append("g")
  .attr("transform", (d, i) => "translate(0, " + i * 33 + ")");

bar
  .append("rect")
  .style("width", (d) => d.score)
  .attr("fill", "pink")
  .attr("class", "bar")
  .on("click", () => console.log("BABY"));

bar
  .append("text")
  .attr("y", 20)
  .text(function (d) {
    return d.name;
  });

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
console.log(secondLink.attr("href"));

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
