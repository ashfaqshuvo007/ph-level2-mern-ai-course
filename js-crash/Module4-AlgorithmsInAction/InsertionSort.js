//* Insertion Sort

// Input = [5,3,8,4,2] Output = [2,3,4,5,8]
const insertionSort = (arr) => {
  for (let index = 1; index < arr.length; index++) {
    let current = arr[index];
    let j = index - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

console.log(insertionSort([5, 3, 8, 4, 2]));
