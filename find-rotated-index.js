function findRotatedIndex(arr, num) {
  let low = 0;
  let high = arr.length - 1;

  // Find the pivot point where the array is rotated
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > arr[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  let pivot = low;
  low = 0;
  high = arr.length - 1;

  // Determine which half to perform binary search on
  if (num >= arr[pivot] && num <= arr[high]) {
    low = pivot;
  } else {
    high = pivot - 1;
  }

  // Standard binary search
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // If the element is not found
}

module.exports = findRotatedIndex;
