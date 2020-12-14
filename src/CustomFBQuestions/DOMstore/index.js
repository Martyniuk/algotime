/*
Implement a simple store class with
 - set(Node, value )
 - get(Node)
 - has(Node)
which store a given Nodes with corresponding values
*/

// Corner Cases:
// may I use ES6 standard - Map, WeakMap ?
// is node already exist in Store - should we override its value?

// var domStore = new DomStore()

// ES6 - Map or optimized WeakMap
// WeakMap - key should be only an Object, not a primitive
// class DomStore {
//   constructor() {
//     // this.store = new Map();
//     this.store = new WeakMap();
//   }
//   // duplicates
//   set(node, value) {
//     this.store.set(node, value);
//   }
//   get(node) {
//     return this.store.get(node);
//   }
//   has(node) {
//     return this.store.has(node);
//   }
// }

// ES5
function DomStore() {
  this.nodes = [];
  this.values = [];
}
DomStore.prototype.set = function (node, value) {
  let index = this.node.indexOf(node);
  if (index === -1) {
    index = this.node.push(node) - 1;
  }

  this.values[index] = value;
};
DomStore.prototype.get = function (node) {
  var index = this.nodes.indexOf(node);

  return index >= 0 ? this.values[index] : null;
};
DomStore.prototype.has = function (node) {
  return this.nodes.indexOf(node) > -1;
};

var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");

var s = new DomStore();

s.set(a, "1");
s.set(b, "2");
console.log("<---- store", s);
console.log(s.has(a), s.get(a));
console.log(s.has(b), s.get(b));
console.log(s.has(c), s.get(c));
