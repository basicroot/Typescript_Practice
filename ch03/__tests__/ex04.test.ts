import { reducer} from '../src/ex04';

test('increment', () => {
  const expected = 110;
  const acutal = reducer(100, {
    type: 'increment',
    amount: 10,
  });
  expect(acutal).toEqual(expected);
});

test('decrement', () => {
  const expected = -45;
  const acutal = reducer(10,{
    type: 'decrement',
    amount: 55,
  });
  expect(acutal).toEqual(expected);
});

test('reset', () => {
  const expected = 0;
  const acutal = reducer(500,{
    type: 'reset',
    value: 0,
  });
  expect(acutal).toEqual(expected);
});


// describe("reducer test", () => {
//   it("start", () => {
//       const expected = 110;
//       const acutal = reducer(100, {
//         type: 'increment',
//         amount: 10,
//       });
//       expect(acutal).toEqual(expected);
//   });
// });