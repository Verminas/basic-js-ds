const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

}
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.root === null ) return null;
    if (this.root !== undefined) return this.root;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  }
  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }
  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.root === data) {
      return true;
    } else if (node.left > data ) {
      return this.has(node.left, data);
    } else if (node.right < data) {
      return this.has(node.right, data);
    } else {
      return false;
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

  if (node === null) {
    return null;
  } else if (data < node.data) {
    return this.find(node.left, data);
  } else if (data > node.data) {
    return this.find(node.right, data);
  } else {
    return node;
  }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let newNode = this.min(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data)
      return node;
    }
  }

  min(node) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (node.left === null) {
      return node;
    } else {
      return this.min(node.left);
    }
  }

  max(node) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (node.right === null) {
      return node;
    } else {
      return this.max(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};