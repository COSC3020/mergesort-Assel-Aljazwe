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

**Recursive & Iterative Mergesort Complexity**:
  The time complexity of both iterative and the traditional recursive mergesort algorithms is $\Theta(n \log n)$ for the worst-case scenario. Here's why the complexity remains the same and how the additional work is accounted for:
  - Breaking Down the Array: Both recursive and iterative mergesort split the array and then combine it back, aiming to sort smaller sections first. The process essentially remains the same in both methods.

  - Merging Work: Every number in the array is merged $\log n$ times, whether we use recursion or loops. That's why the time needed is the same, $n \log n$.
    
**Why In-Place Iterative Mergesort is Still $\Theta(n \log n)$**:
  - **In-Place**: Sorting "in-place" involves rearranging elements within the original array itself, using some extra steps to keep track of position but not using any extra space. These steps are quick and don't add any significant time compared to the overall sorting process.
  - **The Core Process**: The key to mergesort is merging elements, which dictates its time complexity. This involves looking at each element and combining them in order, which is done $n \log n$ times as we double the size of what we're merging each round. The time spent on the in-place operations are minor in comparison to the total time of combining elements.
  - **Complexity Remaining the Same**: The extra steps for in-place sorting don't affect the overall complexity because they involve simple index adjustments and element swaps. Mergesort's time to sort grows based on how many elements there are ($n$) and how many rounds of merging we do ($\log n$), making it $n \log n$. The extra in-place steps are too small to change the growth rate. 
  - **Element Shifting Impact**: When we merge subarrays in place, we sometimes have to shift elements to get everything sorted correctly. This involves moving elements around to make space for an item from the right subarray to fit into its new spot in the left subarray. While this extra step of element shifting might look like it adds more work, the overall time complexity of MergeSort doesn't change from $\Theta(n \log n)$. These additional shifts and operations during merging are already considered in the total work the algorithm does across all levels of merging. When the algorithm merges pieces together (happens log n times), the work for these shifts included in the overall job it has to do. So, the algorithm's performance already takes these steps into account, ensuring it stays efficient and within its planned complexity. 
  
  To summarize, even though the iterative way of doing mergesort might look different, it ends up taking the same amount of time to sort the array, $n \log n$, which is what we expect from mergesort. This is because the core steps of        splitting the array and merging it back together, which determine how long it takes, don't change.

**Conclusion**:
In the worst case scenario, the iterative mergesort algorithm has a worst-case runtime complexity of $\Theta(n \log n)$. This indiciates that the algorithm's growth rate is tightly bound by $n \log n$ in the worst case. This would be consistent with the fundamental behavior of merge sort, where the combination of dividing the array and merging results in a logarithmic number of levels of work, each requiring linear time to merge the subarrays.
