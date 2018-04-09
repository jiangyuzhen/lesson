'use strict';

module.exports = class Stop {
  constructor(node, nodeindex, prev, next) {
    this.node = node;
    this.prev = prev;
    
    this.next = next;
    
    this.path = `${(prev && prev.path ? prev.path + '-' : '')}${node}`;
    this.depth = (prev) ? prev.depth + prev.next[nodeindex] : 0;
  }

  avaliable(nodeIndex, node) {
    if (this.next[nodeIndex] !== null) {
      return {
        path: `${this.path}-${node}`,
        depth: this.depth + this.next[nodeIndex]
      };
    }
    return false;
  }
}