function findFloor(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let floor = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) {
      return arr[mid];
    } else if (arr[mid] < x) {
      floor = arr[mid]; // update floor to current mid value
      low = mid + 1; // move to the right half
    } else {
      high = mid - 1; // move to the left half
    }
  }

  return floor;
}

module.exports = findFloor;
