/**
 * Generates a random password suggestion.
 *
 * This function creates a password of a specified length using a mix of uppercase letters,
 * lowercase letters, digits, and special characters. It randomly selects characters from
 * a predefined set of allowed characters.
 *
 * @returns {string} - The generated password suggestion.
 */
function generatePass() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"; // Allowed characters
  const passwordLength = 16; // Desired password length

  let password = ""; // Initialize the password string
  for (let i = 1; i <= passwordLength; i++) {
    // Append a random character to the password
    password += chars.charAt((Math.random() * chars.length).toFixed(0));
  }
  return password; // Return the generated password
}

/**
 * This function takes an array of strings as an argument and returns an array of arrays of strings.
 * The returned array contains all strings that are anagrams of each other grouped together.
 *
 * It uses a Map to store the anagrams. The Map's keys are the sorted strings, and the values are arrays
 * of strings that are anagrams of the key.
 *
 * @param {string[]} arr - The input array of strings.
 * @returns {string[][]} - The array of arrays of strings that are anagrams of each other.
 */
function groupAnagrams(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const variable = arr[i].split("").sort().join("");
    if (map.has(variable) == false) {
      // Create a new array in the Map for the new key
      map.set(variable, []);
    }
    // Add the current string to the array of anagrams of the key
    map.get(variable).push(arr[i]);
  }
  // Return the anagrams grouped together as an array of arrays
  return Array.from(map.values());
}

// Sliding window technique

/**
 * This function calculates the maximum sum of any contiguous subarray of length k within the given array.
 *
 * The function uses a sliding window approach, where it first calculates the sum of the first k elements. Then, it
 * iteratively slides the window by adding the next element and removing the first element of the previous window, updating
 * the maximum sum encountered.
 *
 * @param {number[]} arr - The input array of numbers.
 * @param {number} k - The length of the subarray for which the maximum sum needs to be found.
 * @returns {number} - The maximum sum of any contiguous subarray of length k.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function findMaxSum(arr, k) {
  // Initialize the maximum sum and the current sum
  let maxSum = 0;
  let currentSum = 0;

  // Calculate the sum of the first k elements
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }

  // Update the maximum sum
  maxSum = currentSum;

  // Slide the window through the array
  for (let i = k; i < arr.length; i++) {
    // Remove the first element of the previous window and add the next element
    currentSum = currentSum + arr[i] - arr[i - k];
    // Update the maximum sum
    maxSum = Math.max(currentSum, maxSum);
  }

  // Return the maximum sum
  return maxSum;
}

//substring without repeating characters sliding window based problem

/**
 * This function takes a string as an argument and returns the longest substring without repeating characters.
 *
 * It uses the sliding window approach to solve the problem. The function maintains two pointers, left and right, which
 * represent the start and end of the current substring. It also uses a set to keep track of the characters in the
 * current substring. If the character at the right pointer is already in the set, it moves the left pointer to the
 * right until the character is no longer in the set. At each step, it checks if the current substring is the longest
 * substring seen so far and updates the longest substring if necessary.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {string} string - The input string.
 * @returns {string} - The longest substring without repeating characters.
 */
function getLongestSubstring(string) {
  let charSet = new Set(); // Set to track unique characters in the current window
  let left = 0; // Left pointer of the window
  let maxLength = 0; // Maximum length of substring without repeating characters
  let longestSubstring = ""; // Resultant longest substring

  // Iterate through the string with the right pointer
  for (let right = 0; right < string.length; right++) {
    // If the character at the right pointer is already in the set, move the left pointer
    while (charSet.has(string[right])) {
      charSet.delete(string[left]); // Remove character at left pointer from the set
      left++; // Move the left pointer to the right
    }

    charSet.add(string[right]); // Add the current character to the set

    // Update the longest substring if the current window is larger
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1; // Update maxLength
      longestSubstring = string.substring(left, right + 1); // Update longestSubstring
    }
  }

  return longestSubstring; // Return the longest substring found
}
