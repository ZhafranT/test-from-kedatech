// 3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek

function nestedObject(obj) {
   let sum = 0;

   for (const key in obj) {
      if (typeof obj[key] === 'object') {
         sum += nestedObject(obj[key]);
      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
         sum += obj[key];
      }
   }

   return sum;
}


// Inputan
const input1 = {
   outer: 2,
   obj: {
      inner: 2,
      otherObj: {
         superInner: 2,
         notANumber: true,
         alsoNotANumber: 'yup',
      },
   },
};

const result1 = nestedObject(input1);
console.log(result1);

const input2 = {
   a: 2,
   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
   c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
   d: 1,
   e: { e: { e: 4 }, ee: 'car' },
};

const result2 = nestedObject(input2);
console.log(result2);


module.exports = nestedObject;