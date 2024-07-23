function countZeroes(arr) {
  // Helper function to find the first occurrence of 0
  function findFirstZero(arr, low, high) {
    if (high >= low) {
      let mid = Math.floor(low + (high - low) / 2);

      // Check if the mid element is the first 0
      if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
        return mid;
      }

      // If the element at mid is 1, then the first 0 must be to the right
      if (arr[mid] === 1) {
        return findFirstZero(arr, mid + 1, high);
      }

      // Otherwise, the first 0 is to the left
      return findFirstZero(arr, low, mid - 1);
    }
    return -1; // No 0 found
  }

  const firstZeroIndex = findFirstZero(arr, 0, arr.length - 1);
  if (firstZeroIndex === -1) return 0; // No zeroes in the array

  return arr.length - firstZeroIndex;
}

module.exports = countZeroes;
