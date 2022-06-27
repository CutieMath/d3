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
console.log("Time Scale");
console.log(timeScale(new Date(2022, 5, 27)));
