# Data structure

## week_1
 ### Things to study
1) Learn what is Data Structure & Algorithms.<br/>
2) Learn the basics of Memory Allocation and Memory leak.<br/>
3) Learn the concept of Complexity Analysis.<br/>
4) NB: The complexity of common operations of all data structures should be covered.<br/>
5) Learn about Asymptotic analysis (Big-O notation).<br/>
6) Learn the concepts of Array. Complete at least three sample workouts & do at least 3 problems from any competitive coding websites (Hacker Rank, Code Chef, Leet code, Algo Expert, etc.)<br/>
7) Learn the concepts of the Linked list. Complete at least three sample workouts<br/>
8) Construction of Singly linked list & Doubly linked list.<br/>
9) Convert array to a linked list<br/>
10) Add a node at the end & beginning<br/>
11) Delete node with the value specified<br/>
12) Insert a node after & before a node with x data<br/>
13) Print all elements by order & reverse by order<br/>
14) Write a program to remove duplicates in a sorted singly linked list<br/>
15) Learn the concepts of String. Complete at least three sample workouts.<br/>
16) Eg: Write a function to replace each alphabet in the given string with another alphabet occurring at the n-th position from each of them.<br/>
17) Learn about Linear Search & Binary Search. Complete at least 3 sample workouts in each of them<br/>
18) Learn the concepts of Recursion. Complete at least 3 sample workouts.<br/>
19) Learn about the applications of all structures you covered this week<br/>

1) What is  data structure 

Data structure is a way of storing and organizing data in a computer program or a system so that can be easily accessible and maintainable effectively

2) why we need to learn data structure

Almost every application we build involves data that is modelled in a certain way to efficiently manage that data that is the reason we need this 

3) What is  algorithms

Algorithms is a step-by-step process of solving a problem or instructions that can be followed to solve a task algorithm is also a flow chart

4) Complexity analysis

It is also known as algorithm analysis it is a process of evaluating the efficiency of an algorithm complexity analysis are two types space and time (both are pending)

### **Time complexity**

This is two types linear time complexity and constant time complexity

- Linear time complexity

Linear time complexity refers to an algorithm or operation whose running time scales linearly with the size of the input. In other words, if the size of the input doubles, the running time of the algorithm also doubles.

An example of an algorithm with linear time complexity is a simple linear search through an unsorted array. If we have an array of n elements and we want to find a particular value, we have to look at each element in the array, one by one. In the worst case, we may have to examine all n elements in the array before finding the desired value. The running time of this algorithm is, therefore, O(n).

- Constant time complexity

Constant time complexity refers to an algorithm or operation whose running time is independent of the size of the input. In other words, the amount of time required to execute the operation remains constant regardless of the input size.

An example of an algorithm with constant time complexity is accessing a specific element in an array. If we have an array of n elements and we want to access the ith element, we can do so in constant time by simply using the array index. Regardless of the size of the array, the time required to access a specific element is always the same. The running time of this operation is, therefore, O(1).

- Quadratic time complexity

Quadratic time complexity refers to an algorithm or operation whose running time scales quadratically with the size of the input. In other words, if the size of the input doubles, the running time of the algorithm increases four-fold.

An example of an algorithm with quadratic time complexity is a simple nested loop that iterates through all possible pairs of elements in an array. If we have an array of n elements, the inner loop will execute n times for each iteration of the outer loop. This gives a total of n^2 iterations, and the running time of the algorithm is, therefore, O(n^2)

in complexity analysis, we are checking the time taken to execute the program based on the input

### Space **complexity**

Space complexity refers to the amount of memory or space required by an algorithm to solve a problem based on the size of the input. It is a measure of how much memory is required by an algorithm to run and is usually expressed in terms of the size of the input

Example:

function sumArray(arr) {
let sum = 0; // constant space
for (let i = 0; i < arr.length; i++) {
sum += arr[i];
}
return sum;
}

In this example the space complexity of the program is O(1) but the time complexity is O(n) 

4) Big O notation

it is the way of expressing the order of magnitude of the growth rate of a function

in another tern 

Big O notation, we are checking that the time is taken to execute the program based on the input

6) How we got O(n),O(1),O(n^2)

- O(1): This notation indicates that the algorithm takes constant time to execute, regardless of the input size. An algorithm that performs a fixed number of operations on the input, such as accessing an element in an array, is an example of an O(1) algorithm.

Example:

function returnFirstElement(arr) {
return arr[0];
}

- O(n): This notation indicates that the algorithm takes time proportional to the input size "n" to execute. An algorithm that processes each element in an input array once, such as a linear search algorithm, is an example of an O(n) algorithm.

Example:

function findSum(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum += arr[i];
}
return sum;
}

- O(n^2): This notation indicates that the algorithm takes time proportional to the square of the input size "n" to execute. An algorithm that compares each element in an input array to every other element in the array, such as a simple nested loop, is an example of an O(n^2) algorithm.

Example:

function findSum(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr.length; j++) {
sum += arr[i][j];
}
}
return sum;
}

7) How to find which program is so faster 

We can check that in different ways the first case is using time which is very difficult to do so the other method is to count the number of operations in the program and check the program (test 1 Calculate the sum)

## Array

The basic operation of an array in Data structure

Set, Get, Init, Traverse, Insert, Delete

- Set: Sets or updates the value of an element at a specified index in the array.
    
    in set the time and space complexity is O(1) because `arr[3]=10` in this condition there is no need for new space or on need of time to set a value in the place if we use any loop to set a value at that time the time complexity will change 
    
- Get: Retrieves the value of an element at a specified index in the array
    
    in get the time and space complexity is O(1) because `b=arr[3]` in this condition there is no need for new space or no need of time to get a value in the place if we use any loop to get a value at that time the time complexity will change 
    
- Init: Initializes the array with a specified number of elements, defaulting to a given value
    
    while initialization an array at that time and the space will increase according  to the number of inputs in this case the time and space complexity is O(n)
    
- Traverse: Iterates over each element in the array, performing a specified operation on each
    
    In traversing the space complexity is O(1) but in the case of time complexity is O(n)
    
- Insert: Adds a new element at a specified index in the array, shifting all elements to the right.
    
    The time and space complexity of inserting an element into an array in JavaScript depends on the position at which the element is inserted and the method used to insert it. Here are the time and space complexities for different cases:
    
    Inserting an element at the end of an array using **`push()`**: This operation has a time complexity of O(1) because it takes a constant amount of time to add an element to the end of an array. The space complexity is also O(1) because no new memory needs to be allocated.
    
    Inserting an element at the beginning of an array using **`unshift()`**: This operation has a time complexity of O(n) because all the existing elements in the array have to be shifted one position to the right to make room for the new element. The space complexity is also O(n) because a new array needs to be created with enough space to hold all the existing elements plus the new element.
    
    Inserting an element in the middle of an array using **`splice()`**: This operation has a time complexity of O(n) in the worst case because all the existing elements in the array after the insertion point have to be shifted one position to the right to make room for the new element. The space complexity is also O(n) in the worst case because a new array needs to be created with enough space to hold all the existing elements plus the new element
    
- Delete: Removes an element at a specified index in the array, shifting all elements to the left
    
    The time complexity of the **`pop()`** method in JavaScript is O(1), which means that it takes a constant amount of time to remove the last element from an array, regardless of the size of the array. This is because the **`pop()`** method simply removes the last element from the array and updates the **`length`** property of the array to reflect the new length.
    
    The space complexity of the **`pop()`** method is also O(1) because it only removes one element from the array and does not create any new data structures. The memory used by the removed element is also freed up for future use.
    
    The time and space complexity of the **`shift()`** method is similar to that of the **`pop()`** method. The time complexity is O(n), where n is the length of the array because all the elements in the array have to be shifted by one position to fill the gap left by the removed element. The space complexity is also O(1), because only one element is removed and no new data structures are created.
    

8) Difference between insert and set

The **`insert`** operation adds a new element to the array at a specified index position, shifting all existing elements to the right. For example, if you insert a new element at index position 2 in an array, the current element at index position 2 will be moved to position 3, the current element at position 3 will be moved to position 4, and so on. This operation increases the length of the array by one.

On the other hand, the **`set`** operation updates the value of an existing element at a specified index position in the array, without changing the length of the array. For example, if you set a new value for the element at index position 2 in an array, the value of the element at that position will be updated to the new value, but the length of the array will remain the same.

In summary, the **`insert`** operation adds a new element to the array and increases its length, while the **`set`** operation updates the value of an existing element without changing the length of the array.

9) what is the time complexity of Array methods

insert / remove from end - O(1)

insert / remove from beginning - O(n)

Access - O(1)

Search - O(n)

Push / pop - O(1)

Shift / unshift / concat / slice / splice - O(n)

forEach / map / filter / reduce - O(n)

## Object

An object is an unordered collection of key-value pairs the key must either be a string or symbol data type where as the value can be of any data type 

to retrieve a value you can use the corresponding key this can be achieved ushing the dot notation or bracket notation 

Any object id not an iterable you cannot use it with a for of loop

10) what is the time complexity of object 

Insert - O(1)

Remove - O(1)

Access - O(1)

Search - O(n)

Object.key() -O(n) 

Object.value() - O(n) 

Object.entries() - O(n)

# problem-solving

1) How to improve  

- Devise a plan  for solving problems
- Master common problem-solving patterns
- Understand the problem
- Explore concrete examples
- solve /simplify
- look back and refactor

### Understand the problem

If you need to understand the problem we need to sum steps

- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What are the inputs that go into the problem?
- What are the outputs that should come from the solution to the problem?
- Can the outputs be determined from the inputs?
- How should I label the important pieces of data that are a part of the problem?

### Explore concrete examples

- Start with simple examples
- Progress to more complex examples
- Explore examples with empty input
- Explore examples with invalid input

### Solve

- Understand the problem
- Explore concrete examples
- Break it down(write out the steps you need to take)

### Simplify

- Find the core difficulty in what you’re trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

### look back and refactor

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

## Linked list

linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.

![Singlelinkedlist.png](https://media.geeksforgeeks.org/wp-content/uploads/20220712172013/Singlelinkedlist.png)

The main benefit of the linked list is the element can be easily removed and inserted without reallocating or reorganization

the drawback is random access to elements is not feasible  and accessing element has linear time complexity

### Doubly Linked list

This is the same as the linked list but in this list the are two pointers previous and next previous will point to the previous node and the next node will point to the next node 

The previous pointer of the first  node will point to the null  

# Recursion

Recursion is a problem-solving technique where the solution depends on solutions to smaller instances of the same problem

it is a great technique to simplify the solution 

if we break down your problem into smaller versions of the same problem recursion is very useful

few things need in recursion they are 

Every recursive solution needs to have a ‘base case’ - condition to terminate the recursion 

Recursion might simplify solving a problem but it does not always translate to a faster solution a recursive solution may be far worse compared to an iterative solution

## Search algorithms

A search algorithm is the step-by-step procedure used to locate specific data among a collection of data. 

- Linear search

Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection

- Binary Search

Binary Search is a searching algorithm for finding an element's position in a sorted array. In this approach, the element is always searched in the middle of a portion of an array. Binary search can be implemented only on a sorted list of items. If the elements are not sorted already, we need to sort them first.    