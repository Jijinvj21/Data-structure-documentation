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

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }


  // BFS(){
  //   let node = this.root,
  //       data = [],
  //       queue = []
  //   queue.push(node)
  //   while(queue.length){
  //     node = queue.shift()
  //     data.push(node.value)
  //     if(node.left) queue.push(node.left)
  //     if(node.right) queue.push(node.right)
  //   }
  //   return data
  // }

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(23);
bst.insert(21);
bst.insert(30);
bst.insert(20);
bst.insert(32);
bst.levelOrder();
