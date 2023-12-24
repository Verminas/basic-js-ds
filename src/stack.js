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
    this.array = array;
    this.lastIndex = this.array.length - 1;
  }

  push(element) {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.array[this.lastIndex + 1] = element;
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.array.length > 0) {
      this.peek();
      this.array.splice(this.lastIndex, 1);
    } else {
      return undefined;
    }
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.array[this.lastIndex], 1;
  }
  // getLength() {
  //   for (let i = 0; )
  // }
}

module.exports = {
  Stack
};
