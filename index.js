const brain = require("brain.js");

const data = require("./data.json");

const network = new brain.recurrent.LSTM();
const trainingData = data.map(({ country, continent }) => ({
  input: country,
  output: continent,
}));

network.train(trainingData, {
  iterations: 2000,
});
const output = network.run("Niger");
console.log(output);
