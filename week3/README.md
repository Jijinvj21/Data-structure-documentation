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

![tree](https://media.geeksforgeeks.org/wp-content/uploads/20221124153129/Treedatastructure.png)

### Tree usage

- File systems for directory structure
- A family tree
- An organization tree
- DOM
- Chatbots
- Abstract syntax trees

### Tree terminology

- The topmost node in the tree is called the root
- Any subnode of a given node is called a child node
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

![binary search tree](https://media.geeksforgeeks.org/wp-content/uploads/20221124174432/binary.png)

### Binary search tree

- The value of  each left node must be smaller than the parent node
- The value of each right node must be greater than the parent node
- Each node has at most two children

![Untitled](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221215114732/bst-21.png)

### Binary search tree operations

- Insertion- to add a node to the tree
- Search- to find a node given its value
- DFS & BFS- to visit all nodes in the tree
- Deletion- to remove a nide given its value

### Binary search tree usage

- Search
- Sorting
- To implement abstract data types such as lookup tables and priority queues

### Tree Traversal

A hierarchical data structure like a tree can be  traversed in different ways

- Depth First Search (DFS)
- Breadth First Search(BFS)
### Depth First Search (DFS)

The DFS algorithm starts at the root node and explores as far as possible along each branch before backtracking

Visit the root node, visit all the nodes in the left subtree, and visit all nod in the right subtree

Depending on the order in which we do this there can be three types of DFS traversals

- Preorder
- Postorder
- inorder

### Preorder Traversal

- Read the data of the node
- Visit the left subtree
- Visit the right subttree

### Inorder Traversal

- Visit the left subtree
- Read the data of the node
- Visit the right subtree

### postorder  Traversal

- Visit the left subtree
- Visit the right subtree
- Read the data of the node
### Breadth First Search(BFS)

Explore all nides at the present depth prior to moving on to the nodes at the next depth level

### BFS Traversal Approach

- Create a queue
- Enqueue the root node
- As  long as the node exists in the queue
    - Dequeue the node from the front
    - read the value of the node
    - enqueue the node’s left child if it exists
    - enqueue the node’s right child if it exists

### Heap

A Heap is a special Tree-based data structure in which the tree is a complete binary tree

![Untitled](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221220165711/MinHeapAndMaxHeap1.png)

### Operations of Heap Data Structure

- **Heapify:** a process of creating a heap from an array.
- **Insertion:** process to insert an element in existing heap time complexity O(log N).
- **Deletion:** deleting the top element of the heap or the highest priority element, and then organizing the heap and returning the element with time complexity O(log N).
### Types of Heap Data Structure

- Max**-**Heap: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.
- Min**-**Heap: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree
### Heap Sort

Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements

### Graph

A graph is a non-linear data structure that consists of a finite number of vertices (also called nodes) connected by edges

Tree is a specific type of graph data structure

### types of graph

- Directed graph
    - A graph in which the edges have a direction
    - Edges ate usually represented by arrows pointing in in the direction the graph can be traversed

![Untitled](https://media.geeksforgeeks.org/wp-content/cdn-uploads/SCC1.png)

- Undirected graph