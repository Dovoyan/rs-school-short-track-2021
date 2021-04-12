/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stuck = [];
  }

  push(element) {
    this.stuck[this.stuck.length] = element;
  }

  pop() {
    const z = this.stuck[this.stuck.length - 1];
    this.stuck.splice(this.stuck.length - 1, 1);
    return z;
  }

  peek() {
    return this.stuck[this.stuck.length - 1];
  }
}

module.exports = Stack;
