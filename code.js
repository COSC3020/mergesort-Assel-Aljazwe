function mergesort(array) {
    const n = array.length;
    // Iteratively double the size of subarrays to be merged
    for (let width = 1; width < n; width *= 2) {
        // Merge adjacent subarrays of current size width
        for (let i = 0; i < n; i += 2 * width) {
            // Calculate the bounds of the subarray to merge
            const left = i;
            const right = Math.min(i + 2 * width - 1, n - 1);
            const mid = Math.min(i + width - 1, n - 1);

            // Perform the in-place merge
            inPlaceMerge(array, left, mid, right);
        }
    }
    return array;
}

function inPlaceMerge(array, left, mid, right) {
    let i = left;
    let j = mid + 1;

    // Merge the two subarrays in place
    while (i <= mid && j <= right) {
        if (array[i] <= array[j]) {
            // Element is already in the correct position
            i++;
        } else {
            // Shift elements to insert array[j] into the correct position
            const value = array[j];
            // This shifting operation contributes to the higher complexity
            for (let k = j; k > i; k--) {
                array[k] = array[k - 1]; // Shifting elements one by one
            }
            array[i] = value; // Inserting the element at its correct position

            // Update indices to reflect the shifted elements
            i++;
            mid++;
            j++;
        }
    }
}


