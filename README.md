[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

### Analysis:
Iterative In-Place MergeSort efficiently organizes an array by merging smaller parts into larger, sorted segments without needing extra space. Here's how it works specifically:

**The Phases of Iterative In-Place MergeSort**:
- **Subarray Doubling**: Starting with subarrays of size one, the algorithm doubles their size with each iteration until the entire array is sorted. This doubling process occurs $logn$ times, showing the algorithm's depth of merging.

- **In-Place Merging**: Unlike traditional MergeSort that uses additional arrays for merging, this version performs the merge directly within the original array. It involves shifting elements to fit the right subarray items into the correct positions in the left subarray, all while maintaining the order.

- **Element Shifting**: The key operation in in-place merging is shifting elements, which allows for merging without extra space. While this process adds steps to each merge, it's efficiently managed within the algorithm's overall workflow.

**Overall Complexity**:
The shifting of elements, needed to merge without extra arrays, introduces more steps. In some cases, especially when the array is not well-ordered, this shifting can make the algorithm work harder, pushing the complexity up to $Θ(n^2)$ in worst-case scenarios.

- Complexity Analysis: Given the in-depth shifting required for in-place merging, the worst-case complexity of iterative in-place MergeSort could reach $Θ(n^2)$ in specific scenarios where the data requires a lot of rearranging to sort the array.

**Conclusion**:
Normally, Mergesort operates with a $Θ(n log n)$ complexity, but when implementing in-place, element shifting can push the complexity up to $Θ(n^2)$ in some cases due to the extra steps needed.
The iterative in-place MergeSort aims to save space by sorting directly in the original array, but this approach comes with its own challenges. Looking at how elements are shifted to merge subarrays shows us that, in some worst-case situations, the algorithm might need to do a lot more work than expected.





