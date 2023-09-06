const nestedObject = require('./nestedObjectQ3')


test('mengurutkan angka dari terbesar ke terkecil', () => {
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

   const input2 = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: 'car' },
   };
   expect(nestedObject(input1)).toEqual(6)
   expect(nestedObject(input2)).toEqual(12)
});