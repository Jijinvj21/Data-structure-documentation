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

### Trie

A trie (derived from retrieval) is a multiway tree data structure used for storing strings over an alphabet. It is used to store a large amount of strings. The pattern matching can be done efficiently using tries

![vghj](https://media.geeksforgeeks.org/wp-content/uploads/20220828232752/Triedatastructure1.png)

### Graph

A graph is a non-linear data structure that consists of a finite number of vertices (also called nodes) connected by edges

Tree is a specific type of graph data structure

### types of graph

- Directed graph
    - A graph in which the edges have a direction
    - Edges ate usually represented by arrows pointing in in the direction the graph can be traversed

![Untitled](https://media.geeksforgeeks.org/wp-content/cdn-uploads/SCC1.png)

- Undirected graph
- A graph in which the edges are bidirectional
- The graph can be traversed in either direction
- The absence of an arrow tells us that the graph is  undirected

![gh](https://media.geeksforgeeks.org/wp-content/cdn-uploads/cycleGraph-300x156.png)

### more graph types

- Null graph

![lkjj](https://static.javatpoint.com/ds/images/types-of-graph-in-data-structure1.png)

- weighted Graph

![ghj](https://www.simplilearn.com/ice9/free_resources_article_thumb/Graph%20Data%20Structure%20-%20Soni/weighted-graph-in-data-structure.png)

- Complete graph

![ghjk](https://www.simplilearn.com/ice9/free_resources_article_thumb/Graph%20Data%20Structure%20-%20Soni/directed-graph-in-data-structure.png)

- Regular graph

![vgh](https://www.simplilearn.com/ice9/free_resources_article_thumb/Graph%20Data%20Structure%20-%20Soni/regular-graph-in-data-structure.png)

### Graph usage

- Social media recommendation
- Google map

### Graph representation

- Adjacency matrix
    - An adjacency matrix is a 2D array of size  V x V where V is the number of vertices in the graph
    - Each row and column represent a vertex
    - If any value of any element say matrix[i][j] is 1, represents that there is an edge connection between vertex i and j
- Adjacency list
    - Vertices are stored in a map-like data structure and every vertex stores a list of its adjacent vertices

### Adjacency matrix vs Adjacency list

- with an adjacency list, we only need to store the values for the edges that exist
- with an adjacent matrix, you store values irrespective of whether an edge exists or not storage wise an adjacency list is way more efficient
- With an adjacency list inserting and finding adjacent nodes is constant time complexity whereas with an adjacency  matrix it is linear time complexity
- an adjacency list allows you to store additional values with an edge such as the  weight of the edge with an adjacency matrix such information would have to be stored externally

