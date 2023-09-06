const numberSort = require('./numberSortQ1')


test('mengurutkan angka dari terbesar ke terkecil', () => {
   const array = [1, 2, 4, 3, 5, 3, 2, 1]
   const sort = [5, 4, 3, 3, 2, 2, 1, 1]
   expect(numberSort(array)).toEqual(sort)
});