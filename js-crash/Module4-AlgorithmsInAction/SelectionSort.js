//* Selection Sort

// Input: [5,3,8,4,2]

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }

      if (minIndex !== i) {
        // tmp = arr[i];
        // arr[i] = arr[minIndex];
        // arr[minIndex] = tmp;
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  }
  return arr;
};

console.log(selectionSort([5, 3, 8, 4, 2]));
