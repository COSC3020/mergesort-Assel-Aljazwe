function mergesort(array) {
    const n = array.length;
    for (let width = 1; width < n; width = 2 * width) {
        for (let i = 0; i < n; i = i + 2 * width) {
            // Defining the bounds of the subarray to merge
            const left = i;
            const right = Math.min(i + 2 * width - 1, n - 1);
            const mid = Math.min(i + width - 1, n - 1);

            // Merge the subarrays in place
            inPlaceMerge(array, left, mid, right);
        }
    }
    return array;
}

function inPlaceMerge(array, left, mid, right) {
    let i = left;
    let j = mid + 1;

    while (i <= mid && j <= right) {
        if (array[i] <= array[j]) {
            i++;
        } else {
            // Element from the right subarray is smaller and needs to be inserted before the left subarray element
            let value = array[j];
            for (let k = j; k > i; k--) {
                array[k] = array[k - 1];
            }
            array[i] = value;

            // Adjusting indices since we've inserted the element from the right subarray into the correct position
            i++;
            mid++;
            j++;
        }
    }
}

