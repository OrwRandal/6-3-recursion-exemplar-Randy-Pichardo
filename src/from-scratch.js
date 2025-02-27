// Recursion Problem Set: Coding Exercises
/*
    Recursion can seem tricky because it involves thinking in terms of smaller subproblems
    There are two key things to always keep in mind:  
        1. The Base Case – This is the condition you set that stops the recursion. 
        Without it, The function will continue calling itself forever, leading to a stack overflow
        2. The Recursive Call – Each time the function calls itself, it should be working toward reaching the base case
    If the base case is missing or the recursive call doesn’t progress toward it, the function will run indefinitely
*/

/* Here, I added 2 parameters, in addition to arr: 
    1: `index`: This keeps track of the current position in the array. I set it to default to 0 so that we start from the beginning of the array
    2: `total`: This stores the running sum of the array elements as we go through them. I set it to default to 0 because we haven't added anything yet */
const sum = (arr, index = 0, total = 0) => {
    // Base case: If `index` equals the length of the array, that means we've gone through all the elements, so we return the `total`
    if(index === arr.length) return total;

    /* Recursive call: We call `sum` again with:
    - The next index (`index + 1`), moving us forward in the array
    - The updated total (`total + arr[index]`), adding the current element to the sum
    This process continues until we reach the base case, at which point the total sum is returned */
    return sum(arr, index + 1, total + arr[index]);
}

/* I added 2 parameters here:
    1: index: This keeps track of the current position in the string as we move through it.
    2: reversed: This starts as an empty string and is built up over time to store the reversed string as we move through the original string */
const reverse = (str, index = 0, reversed = '') => {
    // Base case: If 'index' is equal to the length of the string, it means we got through all characters, so we return the reversed string
    if(index === str.length) return reversed;

    // Recursive case: We call the function again, moving to the next character by incrementing the index
    // We add the current character (str[index]) to the beginning of the 'reversed' string, building the reversed string as we go
    return reverse(str, index + 1, str[index] + reversed);
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
    // If n is 0 or 1, we return it directly since the Fibonacci sequence for these values is 0 and 1
    if(n <= 1) return n;

    // Since the Fibonacci sequence depends on the sum of the previous two numbers, 
    // we set up these variables for the first two numbers of the sequence (0 and 1)
    let firstNum = 0;
    let secondNum = 1;

    // We use a while loop to iterate (a for loop would work as well), reducing n by 1 each time, 
    // and stop when n reaches 1 because we need at least two numbers to continue the iteration
    while(n > 1){
        // We get the next Fibonacci number by adding the first and second numbers.
        let combined = firstNum + secondNum;
        // To move the sequence forward: the first number becomes the second, and the second gets updated to the new combined value
        firstNum = secondNum;
        secondNum = combined;
        //We decrement n after each iteration
        n--;
    }
    // After the loop completes, secondNum holds the nth Fibonacci number, so we return it
    return secondNum;
};

// Recursive fibonacci
const fibRec = (n) => {
    // Base Case: When n is 0 or 1, we return n because these are the first two numbers of the Fibonacci sequence (0 and 1).
    if(n <= 1) return n;

    // Recursive Case: In the Fibonacci sequence, each number is the sum of the two previous numbers. So, to get the nth Fibonacci number,
    // we call the function twice: once for (n - 1) and once for (n - 2). This allows us to sum the two previous numbers to get the current number.
    return fibRec(n - 1) + fibRec(n - 2);
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    // Base Case 1: If the end index is less than the start index, that means we’ve searched the entire array 
    // without finding the target, so we return -1.
    if(end < start) return -1;

    // To get the middle index, we add the start and end indices together and divide by 2. 
    // We use Math.floor to round down if the result is a decimal.
    let middle = Math.floor((start + end) / 2);
    // Base Case 2: If the element at the middle index matches the target, we’ve found the target 
    // and return the middle index.
    if(target === arr[middle]) return middle;

    // Recursive Case: If the target is greater than the middle element, move the start index to middle + 1 to search in the right part of the current range.
    // If the target is smaller, move the end index to middle - 1 to search in the left part of the current range.
    // This keeps narrowing the search range until the target is found or there are no more elements left to check.
    return target > arr[middle]? binarySearch(arr, target, middle + 1, end): 
    binarySearch(arr, target, start, middle - 1);
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
