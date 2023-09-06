// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]

function numberSort(arr) {

   var len = arr.length;
   var swapped;

   do {
      swapped = false;

      for (var i = 0; i < len - 1; i++) {
         if (arr[i] < arr[i + 1]) {
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
         }
      }
   } while (swapped);

   return arr;
}

var numbers = [1, 2, 4, 3, 5, 3, 2, 1];
numberSort(numbers);
console.log(numbers);

module.exports = numberSort;