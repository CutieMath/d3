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
