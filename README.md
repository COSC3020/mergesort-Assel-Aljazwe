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

**Doubling Subarray Size**: The algorithm starts with small subarrays of size one and doubles their size every step until it covers the whole array. This doubling occurs $log n$ times, where $n$ is the total number of items in the array. So for this part, the time it takes is $log n$.

**Going Through the Array**: In every single doubling step, the algorithm goes through the whole array to merge the subarrays. This means we're passing through the whole array, which takes us $n$ time. 

**Merging the Subarrays**: When merging two subarrays, in the worst case, every item might need to move to get the subarrays merged correctly. Moving items around takes time, and in the worst case scenario, this could also take up to $n$ time for each merge.

**Adding Everything Together**:
- We have $log n$ steps from doubling the size of the subarrays we're merging.
- In each step, we're doing work that involves going through the entire array ($n$ work) to merge the subarrays. Although merging might seem to add additional work, it's important for us to understand that the total work for merging across all pieces in one step sums up to $n$. This is because, despite the potential for every item to move during a merge, each item is essentially being considered once per merge step across the whole array.
- Therefore, the work in each step is proportional to the size of the array, $n$, and since there are $\log n$ such steps, the total time complexity of the algorithm is $n \log n$.

**Conclusion**:
In the worst case scenario, the iterative mergesort algorithm has a worst-case runtime complexity of $\Theta(n \log n)$. This indiciates that the algorithm's growth rate is tightly bound by $n \log n$ in the worst case. This would be consistent with the fundamental behavior of merge sort, where the combination of dividing the array and merging results in a logarithmic number of levels of work, each requiring linear time to merge the subarrays.
