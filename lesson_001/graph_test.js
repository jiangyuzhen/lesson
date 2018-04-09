const Graph = require('./graph.class');

const INPUT = [
/*A*/[null, 1, 3],
/*B*/[1, null, 2],
/*C*/[2, null, null],

];


const NODES = ['A', 'B', 'C'];

let g = new Graph(INPUT, NODES);
g.destination('A', 'C');