# Data structure

## week_2

1) Learn about Bubble Sort, Insertion Sort, Selection Sort, Quick sort and Merge sort. Complete at least three sample workouts in each of them.

2) Learn the concept of Stack and Queue. Complete at least three sample workouts in each of them & do at least 3 problems from any competitive coding websites (Hacker Rank, Code Chef, Leet code, Algo Expert, etc.)

a) PUSH, POP and Display elements in Stack

b) Enqueue, Dequeue and Display elements in Queue

3) Learn the concepts of Hash Table. Complete at least 3 sample workouts.

4) Learn about the Applications of all structures you covered this week

# Sorting

Sorting in data structures refers to the process of arranging elements in a specific order

## Bubble Sort

Compare adjacent elements in the array and swap the positions if they are not in the intended order

Repeat the instruction as you step through each element in the array

Once you step through the whole array with no swaps the array is sorted

big O notation is O(n)

### Advantages

- Bubble sort is one of the simplest sorting algorithms to understand and implement
- Bubble sort operates in place, meaning it doesn't require additional memory to sort the elements. It only needs a single additional variable to hold a temporary value during the swapping process. This can be advantageous when memory usage is a concern.
- Bubble sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements. If two elements have the same value, their order will remain the same after sorting. This can be important when sorting objects or records with multiple key attributes.
- the big O this bubble sort is O(n) in bet case and O(n^2) in worst case

## Insertion Sort

Insertion sort is a simple comparison-based sorting algorithm that builds the final sorted array one element at a time. It works by virtually split the array into a sorted and an unsorted part

Assume that the first element is already sorted and the remaining elements are unsorted 

Select an unsorted element and compare with all elements in the sorted part

if the elements in the sorted part are smaller  than the selected element proceed to the next element in  the unsorted part else shift larger elements in the sorted part toward the right 

insert the selected element at the right index 

Repeat till all the unsorted  are places in the right order 

big O notation is O(n^2)

### Advantages

- Simplicity: Insertion sort is one of the simplest sorting algorithms to understand and implement. Its straightforward logic makes it easier to write and debug compared to more complex algorithms like quicksort or mergesort. This simplicity also makes it a good choice for small input sizes or when simplicity is preferred over highly optimized performance.
- Adaptive: Insertion sort performs well on partially sorted or nearly sorted lists. If the input list is already partially sorted, insertion sort requires fewer comparisons and swaps, leading to improved efficiency. This adaptability makes insertion sort a suitable choice for real-time or streaming data where elements are continuously added to an already sorted list.
- Efficient for small data sets: Insertion sort has an average-case time complexity of O(n^2). However, for small input sizes or nearly sorted lists, insertion sort can outperform more complex algorithms. Its overhead is relatively low, and it has a small constant factor, making it efficient for small lists.
- In-place sorting: Insertion sort operates directly on the input list without requiring additional space. It rearranges elements within the original array, which can be advantageous when memory is a concern. This in-place sorting property makes insertion sort useful in situations where memory utilization is critical.
- Online sorting: Insertion sort is an online algorithm, meaning it can sort a list as it receives the elements one by one without needing the entire list upfront. This property makes it useful in scenarios where elements are continuously arriving or being processed in real-time.

## Quick sort

identify the pivot element in the array we can choose different elements as pivot element

- pick the first element as a pivot
- pick the last element as a pivot
- pick the random element as a pivot
- pick the median as the pivot

Put everything that is smaller than the pivot into a left array and everything that is greater that the pivot into a right array

Repeat the process for the individual left and right arrays till you have an array of length 1 which sorted by definition

after all repeatedly concatenate the left array pivot and right array till one sorted array remains 

### Advantages

- **Simple:** Quicksort is a relatively simple algorithm to understand and implement.• **Fast:** Quicksort is one of the
- fastest sorting algorithms, with an average time complexity of O(n log n).
- **Recursive:** Quicksort is a recursive algorithm, which can make it difficult to implement in some languages.

## Merge Sort

Divide the array into sub-arrays each containing only one element (an array with one element is considered sorted )

Repeatedly merge the sub-arrays to produce new sorted sub-arrays until  there  is only one sub-array remaining that will be the sorted array

### Advantages

- It is a stable sort, which means that the order of elements with equal values is preserved during the sort.
- It has a worst-case time complexity of O(n log n), which means that it can sort large arrays relatively quickly.
- It is a divide-and-conquer algorithm, which means that it is relatively easy to understand and implement.
- It can be easily adapted to work with linked lists, making it useful for sorting data that is too large to fit into memory.
- It can be implemented in a parallel way, which can greatly speed up sorting large data sets.

## Selection Sort

Store the first element as the smallest value you’ve seen so far 

Compare this item to the next item in the array until you find a smaller number

if a smaller number is found designate that smaller number to be the new minimum and continue until the end of the array 

if the minim is not the value (index) you initially began  with swap the two values 

repeat this with the next element until the array is sorted

### Advantages

- It is simple to understand and implement.
- It requires no additional storage space.
- It can be used to sort any type of data.
- It is stable, meaning that the relative order of elements with equal keys is preserved.

# Hash Table

A hash table also known as the hash map is a data structure that is used to store key-value pairs 

Given a key, you can associate a value with that key for a very faster lookup   

javascript object is a special implementation of the hash table data structure  

how ever object class adds its own keys that you input conflict and overwrite the inherited default properties

maps which were introduced in 2015 allow you to store key-value  pairs 

we store the key-value pairs in fix size array

array have a numeric index

how do we go from using a string as an index to a number as an index

a hashing function accepts the string key converts it into a hash code using a defined logic and then maps it into a numeric index that is within the bounds of the array 

using the index store the value

the same hashing function is reused to retrieve the value given a key 

- set to store a key-value pair
- get to retrieve a given key
- remove to delete a key-value pair

### Application

Hash tables are typically implemented where constant time lookup and insertion are required 

database indexing

caches

# **Stacks**

Stacks are a data structure that store information in the form of a list. They allow only adding and removing elements under a **LIFO pattern (last in, first out)**. In stacks, elements can't be added or removed out of order, they always have to follow the LIFO pattern.

### Application

- JavaScript's call stack.
- Managing function invocations in various programming languages.
- The undo/redo functionality many programs offer.

The big O of stack methods is the following:

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(n)

# **Queues**

Queues work in a very similar way to stacks, but elements follow a different pattern for add and removal. Queues allow only a **FIFO pattern (first in, first out)**. In queues, elements can't be added or removed out of order, they always have to follow the FIFO pattern.

### Application

- Background tasks.
- Printing/task processing.

The big O of queue methods is the following:

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(n)

**There are three ways of calculating the hash function:**

- **Division method**
- **Folding method**
- **Mid square method**

### Collision

When the two different values have the same value, then the problem occurs between the two values, known as a collision. In the above example, the value is stored at index 6. If the key value is 26, then the index would be:

collision techniques:

- Open Hashing: It is also known as closed addressing.
- Closed Hashing: It is also known as open addressing.   