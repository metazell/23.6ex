function findRotationCount(arr) {
  let low = 0;
  let high = arr.length - 1;

  // Edge case: If the array is not rotated at all
  if (arr[low] < arr[high]) return 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Check if mid is the smallest element
    if (arr[mid] < arr[mid - 1]) {
      return mid;
    }

    // Check if mid+1 is the smallest element
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    }

    // Decide which half to search in
    if (arr[mid] > arr[high]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return 0; // Default case (should never hit if array is rotated)
}

module.exports = findRotationCount;
