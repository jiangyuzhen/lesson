'use strict';
const Stop = require('./stop.class');

module.exports = class Graph {
  constructor(inputs, labels) {
    this.inputs = inputs;
    this.labels = labels;
    this.labelsR = {};
    for (let k in labels) {
      this.labelsR[labels[k]] = k * 1;
    }
    this.result = [];
  }

  destination(from, to) {
    let fromStop = new Stop(from, this.labelsR[from], null, this.inputs[this.labelsR[from]]);

    let result = fromStop.avaliable(this.labelsR[to], to);
    if (result !== false) {
      this.result.push(result);
    }
    this.reduce(fromStop, to);

    console.log(this.result); process.exit(0);
  }

  reduce(stop, to) {
    if (stop.depth >= 10) {
      return;
    }
    if (stop.node === to){
      return;
    }
    let from = stop.node;
    for (let k in this.inputs[this.labelsR[from]]) {
      if (this.inputs[this.labelsR[from]][k] === null) {
        continue;
      }
    
      if (k === this.labelsR[to]) {
        continue;
      }

      let tmpStop = new Stop(this.labels[k], k, stop, this.inputs[k]);
      let result = tmpStop.avaliable(this.labelsR[to], to);
      if (result !== false) {
        this.result.push(result);
      }
      this.reduce(tmpStop, to);

    }
  }
}