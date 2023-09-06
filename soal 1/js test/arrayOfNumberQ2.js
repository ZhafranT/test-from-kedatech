// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1


function maxSum(arr, num) {
   if (num > arr.length) {
      return null;
   }

   let maxSum = 0;
   let tempSum = 0;

   for (let i = 0; i < num; i++) {
      maxSum += arr[i];
   }
   tempSum = maxSum;

   for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
   }

   return maxSum;
}

const inputArray1 = [100, 200, 300, 400];
const num1 = 2;
const result1 = maxSum(inputArray1, num1);
console.log(result1);

const inputArray2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const num2 = 4;
const result2 = maxSum(inputArray2, num2);
console.log(result2);

const inputArray3 = [-3, 4, 0, -2, 6, -1];
const num3 = 2;
const result3 = maxSum(inputArray3, num3);
console.log(result3);

module.exports = maxSum;