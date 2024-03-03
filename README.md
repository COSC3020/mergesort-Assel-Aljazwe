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
The Iterative In-Place MergeSort algorithm is designed to sort an array by iteratively merging subarrays without additional space, relying on direct element manipulation within the original array. Here's how it works:

### **The Process of Iterative In-Place Mergesort**:
- **Subarray Expansion**: The algorithm begins with subarrays of size 1 and doubles their size with each iteration, affecting the entire array. This process, occurs $log n$ times, which reflects the logarithmic depth of merging operations characteristic of MergeSort.
- **In-Place Merging Mechanism**: Differing from the traditional Mergesort, which uses extra storage arrays, this variant merges subarrays directly within the original array. This approach requires shifting elements to correctly position items from one subarray to another, maintaing sorted order without extra space.
- **Element Shifting Impact**: The pivotal operation in in-place merging is the shifting of elements. Each time an element from the right subarray needs to be inserted ahead of elements in the left, all intervening elements are shifted one position to the right. While efficient in space, this method introduces additional steps for every insertion, as elements are moved sequentially.

### **Worst-Case Complexity Analysis**:
- In certain scenarios, particularly those with poorly ordered array,s the frequency and extent of shifting can significantly increase the operational workload. For each insertion from the right subarray into the left, many elements are potentially shifted, resulting in a growing number of operations needed.
- **Quadratic Complexity per Merge**: The necessity to shift elements for each insertion introduces a $Θ(n^2)$ complexity for a single merge opertion, as each element might need to be moved multiple times throughout the sorting process.
- **Overall Complexity**: Since the algorithm is iterative and merging operations span $log n$ levels, the compounded effect of quadratic complexity per merge across these levels suggests a worst-case runtime complexity of $Θ(n^2\ logn)$. This result accounts for the in-depth shifting required within each merge and the logarithmic number of merge levels.

### Conclusion:
The iterative in-place mergesort might optimize space by eliminating the need for extra storage arrays, however a notable increase in complexity occurs due to the in-place element shifting mechanism. To be specific, the algorithm's worst-case scenario results in a $Θ(n^2\ logn)$ complexity, driven largely by the extensive operations involved in merging subarrays directly within the original array. 

**Helpful Reference**: https://www.geeksforgeeks.org/in-place-merge-sort/

