# InterviewQA

1. **BinaryGap**

   A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

   For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

   Write a function:

   `function solution(N);`

   that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

   For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

   Write an efficient algorithm for the following assumptions:

   N is an integer within the range [1..2,147,483,647].



2. **CyclicRotation** 

   An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

   The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

   Write a function:

   `function solution(A, K);`

   that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

   For example, given

   ```
   A = [3, 8, 9, 7, 6]
   K = 3
   ```

   the function should return [9, 7, 6, 3, 8]. Three rotations were made:

   ```
   [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
   [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
   [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
   ```

   For another example, given

   ```
   A = [0, 0, 0]
   K = 1
   ```

   the function should return [0, 0, 0]

   Given

   ```
   A = [1, 2, 3, 4]
   K = 4
   ```

   the function should return [1, 2, 3, 4]

   Assume that:

   N and K are integers within the range [0..100];
   each element of array A is an integer within the range [???1,000..1,000].

   

3. **OddOccurrencesInArray** :

   A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

   For example, in array A such that:

   ```
     A[0] = 9  A[1] = 3  A[2] = 9  A[3] = 3  A[4] = 9  A[5] = 7  A[6] = 9
   ```

   > - the elements at indexes 0 and 2 have value 9,
   > - the elements at indexes 1 and 3 have value 3,
   > - the elements at indexes 4 and 6 have value 9,
   > - the element at index 5 has value 7 and is unpaired.

   Write a function:

   > ```
   > class Solution { public int solution(int[] A); }
   > ```

   that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

   For example, given array A such that:

   ```
     A[0] = 9  A[1] = 3  A[2] = 9  A[3] = 3  A[4] = 9  A[5] = 7  A[6] = 9
   ```

   the function should return 7, as explained in the example above.

   Write an ***\*efficient\**** algorithm for the following assumptions:

   > - N is an odd integer within the range [1..1,000,000];
   > - each element of array A is an integer within the range [1..1,000,000,000];
   > - all but one of the values in A occur an even number of times.


4. **FrogJmp** :

   A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

   Count the minimal number of jumps that the small frog must perform to reach its target.

   Write a function:

   > ```
   > class Solution { public int solution(int X, int Y, int D); }
   > ```

   that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

   For example, given:

   ```
     X = 10  Y = 85  D = 30
   ```

   the function should return 3, because the frog will be positioned as follows:

   > - after the first jump, at position 10 + 30 = 40
   > - after the second jump, at position 10 + 30 + 30 = 70
   > - after the third jump, at position 10 + 30 + 30 + 30 = 100

   Write an ***\*efficient\**** algorithm for the following assumptions:

   > - X, Y and D are integers within the range [1..1,000,000,000];
   > - X ??? Y.

5. **PermMissingElem**

   An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

   Your goal is to find that missing element.

   Write a function:

   > ```
   > class Solution { public int solution(int[] A); }
   > ```

   that, given an array A, returns the value of the missing element.

   For example, given array A such that:

   ```
     A[0] = 2  A[1] = 3  A[2] = 1  A[3] = 5
   ```

   the function should return 4, as it is the missing element.

   Write an ***\*efficient\**** algorithm for the following assumptions:

   > - N is an integer within the range [0..100,000];
   > - the elements of A are all distinct;
   > - each element of array A is an integer within the range [1..(N + 1)].

