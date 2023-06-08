function heapSort(arr) {
    const length = arr.length,
      limit = Math.floor(length / 2 - 1); // starting from the limit bcoz we are avoiding the leaf node
    // converting the array to a max heap
    // O(nlog(n))
    for (let i = limit; i >= 0; i--) {
      heapifyDown(arr, i, length);
    }
    // sorting the array by swapping root and last child and heapifying the rest
    //O(nlog(n))
    for (let i = length - 1; i >= 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapifyDown(arr, 0, i);
    }
    return arr;
  }
  
  function heapifyDown(arr, index, length) { 
    let maxIdx = index,
      leftChildIdx = 2 * index + 1,
      rightChildIdx = 2 * index + 2;
  
    if (leftChildIdx < length && arr[leftChildIdx] > arr[maxIdx]) {
      maxIdx = leftChildIdx;
    }
    if (rightChildIdx < length && arr[rightChildIdx] > arr[maxIdx]) {
      maxIdx = rightChildIdx;
    }
  
    if (maxIdx !== index) {
      [arr[maxIdx], arr[index]] = [arr[index], arr[maxIdx]];
      heapifyDown(arr, maxIdx, length);
    }
    return arr;
  }
  console.log(heapSort([8, 23, 1, 9, 3]));
  