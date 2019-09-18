//Weave-quere is a new queue generated by adding 2 queue data in alternate order

let Queue = require('./queue');

console.log("================================");

let q1 = new Queue();
let q2 = new Queue();

q1.add(1);
q1.add(2);
q1.add(3);
q1.add(4);
q1.add(5);
q1.add(100);
q1.add(200);

q2.add(6);
q2.add(7);
q2.add(8);
q2.add(9);
q2.add(10);

let weavedQ = new Queue();

console.log(q1.data);
console.log(q2.data);

while (q1.peek() || q2.peek()) {
    if (q1.peek())
        weavedQ.add(q1.remove());
    if (q2.peek())
        weavedQ.add(q2.remove());
}

console.log(weavedQ);