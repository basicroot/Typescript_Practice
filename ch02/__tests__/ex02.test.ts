import { getSpeed } from '../src/ex02';

test('slow speed', () => {
  expect(getSpeed("slow")).toEqual(10);
});

