import { MyPartial } from '../src/ex02';

test('zero of zero value', () => {
  const expected = {};
  type T1 = MyPartial<{
  }>;

  const actual = {};
  expect(actual).toEqual(expected);
});

test('zero of one value', () => {
  const expected = {};
  type T1 = MyPartial<{
    flag:boolean
  }>;

  const actual : T1= {};
  expect(actual).toEqual(expected);
});

test('one of one value', () => {
  const expected = {flag:true};
  type T1 = MyPartial<{
    flag:boolean
  }>;

  const actual : T1= {flag:true};
  expect(actual).toEqual(expected);
});

test('zero of two value', () => {
  const expected = {};
  type T1 = MyPartial<{
    foo: number;
    bar: string;
  }>;

  const actual : T1 = {};
  expect(actual).toEqual(expected);
});

test('one of two value', () => {
  const expected = {foo:1};
  type T1 = MyPartial<{
    foo: number;
    bar: string;
  }>;

  const actual : T1 = {foo:1};
  expect(actual).toEqual(expected);
});

test('two of two value', () => {
  const expected = {foo:1, bar:'test'};
  type T1 = MyPartial<{
    foo: number;
    bar: string;
  }>;

  const actual : T1 = {foo:1, bar:'test'};
  expect(actual).toEqual(expected);
});
