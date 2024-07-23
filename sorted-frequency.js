function sortedFrequency(arr, num) {
  function findFirst(arr, num, low, high) {
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] < num) {
        low = mid + 1;
      } else if (arr[mid] > num || (mid > 0 && arr[mid - 1] === num)) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }

  function findLast(arr, num, low, high) {
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] > num) {
        high = mid - 1;
      } else if (arr[mid] < num || (mid < arr.length - 1 && arr[mid + 1] === num)) {
        low = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
  }

  let first = findFirst(arr, num, 0, arr.length - 1);
  if (first === -1) return -1;

  let last = findLast(arr, num, 0, arr.length - 1);
  return last - first + 1;
}

module.exports = sortedFrequency;
