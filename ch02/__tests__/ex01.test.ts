import { myFilter } from '../src/ex01';

test('number array', () => {

  expect(myFilter([1, 2, 3, 4, 5], num => num % 2 === 0)).toEqual([2,4]);
});

test('string array', () => {
  expect(myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4)).toEqual(['hoge']);
});
