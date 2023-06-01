# week 3

1) Learn the concepts of Tree. Complete at least three sample workouts.

2) Learn the concepts of Binary Search Tree. Complete at least three sample workouts. 

Example:

- Create a Binary Search Tree with insertion, contains, delete, three traversals ( postorder, preorder, in order).
- Find the closest value to a given number in a Tree.
- Validate whether a given tree is BST or not.

3) Learn the concepts of Heap. Complete at least three sample workouts.

Example:

- Create a min heap & max heap with build, insert, remove.

4) Learn the concept of Heap sort. Complete at least three sample workouts

5) Learn the concepts of Trie. Complete at least 3 sample workouts.

6) Learn the concepts of Graph. Complete at least three sample workouts.

7) Learn the concepts of Graph traversals (BFS, DFS).

8) Do at least 3 problems each for every structure from any competitive coding websites

9) Learn about the applications of all structures you covered this week  

## Tree

- A tree is a hierarchical data structure that consists of nodes connected by edges
- A tree is a non-linear data structure compared to arrays linked lists stacks and queues which are linear data structures
- ln linear data structures the time required to search is proportional to the size of the data set
- trees however owing to their nonlinear nature allow quicker and easier access to the data
- a tree will not obtain any loops or cycles

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d70f961d-e0e6-40f8-bfe2-9a4087ac8ed1/Untitled.png)

### Tree usage

- File systems for directory structure
- A family tree
- An organization tree
- DOM
- Chatbots
- Abstract syntax trees

### Tree terminology

- The topmost node in the tree is called the root
- **Any subnode of a given node is called a child node**
- Root nodes have no parent node
- Leaf node means they  have no child node
- Siblings node have the same parent
- Ancestor, it means a parent of parent  eg: A is the ancestor of E
- Path  flow from one node to another
- Distance means which is the number of nodes in the shortest path to reach a node
- The degree of a node is the total number of child nodes it has
- The degree of three is the total number of child nodes it has
- Dept of the node is the number if the node from the root to that node
- the height of the node is the number of edges from the deepest leaf of that node height of the tree is 2

### Binary

- A binary tree is a tree data structure  in which each node has at almost two children they are referred to as the left  child and right child

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b645326f-4d6a-4b2a-92fe-eafd97932927/Untitled.png)

### Binary search tree

- The value of  each left node must be smaller than the parent node
- The value of each right node must be greater than the parent node
- Each node has at most two children

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/997fb9a3-7bb1-438a-bf64-e571e234c427/Untitled.png)

### Binary search tree operations

- Insertion- to add a node to the tree
- Search- to find a node given its value
- DFS & BFS- to visit all nodes in the tree
- Deletion- to remove a nide given its value

### Binary search tree usage

- Search
- Sorting
- To implement abstract data types such as lookup tables and priority queues