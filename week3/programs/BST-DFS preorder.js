class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  preOrder(root){
    if(root){
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right )
    }
  }
}
