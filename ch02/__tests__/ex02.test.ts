import { getSpeed } from '../src/ex02';

test('slow speed', () => {
  expect(getSpeed("slow")).toEqual(10);
});

test('medium speed', () => {
  expect(getSpeed("medium")).toEqual(50);
});

test('fast speed', () => {
  expect(getSpeed("fast")).toEqual(200);
});

