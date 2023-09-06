const maxSum = require('./arrayOfNumberQ2')


test('input array of number dan number untuk menemukan jumlah maksimum subarray', () => {
   const inputArray1 = [100, 200, 300, 400];
   const inputArray2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
   const inputArray3 = [-3, 4, 0, -2, 6, -1];

   expect(maxSum(inputArray1, 2)).toEqual(700);
   expect(maxSum(inputArray2, 4)).toEqual(39);
   expect(maxSum(inputArray3, 2)).toEqual(5);
});