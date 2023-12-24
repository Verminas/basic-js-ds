const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(array) {
    if (array !== undefined) {
      this.array = array;
      this.lastIndex = this.array.length - 1;
    } else {
      this.array = [];
      this.lastIndex = -1;
    }
  }

  push(element) {
    this.lastIndex++;
    this.array[this.lastIndex] = element;
  }

  pop() {
    if (this.lastIndex >= 0) {
      const poppedElement = this.array[this.lastIndex];
      this.array.splice(this.lastIndex, 1);
      this.lastIndex--;
      return poppedElement;
    } else {
      return undefined;
    }
  }

  peek() {
    if (this.lastIndex >= 0) {
      return this.array[this.lastIndex];
    } else {
      return undefined;
    }
  }
}

module.exports = {
  Stack
};
