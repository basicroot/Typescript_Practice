import { mapFromArray } from '../src/ex01';

test('zero elem', () => {
  const expected = new Map ();

  const data = [];
  const actual = mapFromArray(data, "id");
  expect(actual).toEqual(expected);
});

test('one elem', () => {
  const expected = new Map ([
    [1 , { id: 1, name: 'John Smith' }],
  ]);

  const data = [
    { id: 1, name: "John Smith" },
  ];
  const actual = mapFromArray(data, "id");
  expect(actual).toEqual(expected);
});

test('id name', () => {
  const expected = new Map ([
    [1 , { id: 1, name: 'John Smith' }],
    [2 , { id: 2, name: 'Mary Sue' }],
    [100 , { id: 100, name: 'Taro Yamada' }]]);

  const data = [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Mary Sue" },
    { id: 100, name: "Taro Yamada" }
  ];
  const actual = mapFromArray(data, "id");
  expect(actual).toEqual(expected);
});

test('name value', () => {
  const expected = new Map ([
    ['book' , { name: 'book', value: 1500 }],
    ['apple' , { name: 'apple', value: 120 }],
    ['orange' , { name: 'orange', value: 140 }]]);

  const data = [
    { name: 'book', value: 1500 },
    { name: 'apple', value: 120 },
    { name: 'orange', value: 140 }
  ];
  const actual = mapFromArray(data, "name");
  expect(actual).toEqual(expected);
});
