import { EventDischarger, EventPayloads} from '../src/ex03';

test('start', () => {
  const ed = new EventDischarger<EventPayloads>();
  const expected = {"eventName":"start","payload":{"user":"user1"}};
  
  const actual = ed.emit("start", {
    user: "user1"
  });

  expect(actual).toEqual(expected);
  // // エラー例
  // ed.emit("start", {
  //   user: "user2",
  //   after: 0
  // });
});

test('stop', () => {
  const ed = new EventDischarger<EventPayloads>();
  const expected = {"eventName":"stop","payload":{"user":"user1","after":3}};
  
  const actual = ed.emit("stop", {
    user: "user1",
    after: 3
  });

  expect(actual).toEqual(expected);
  // // エラー例
  // ed.emit("stop", {
  //   user: "user1"
  // });
});

test('end', () => {
  const ed = new EventDischarger<EventPayloads>();
  const expected = {"eventName":"end","payload":{"user":"user1","after":3}};
  
  const actual = ed.emit("end", {
    user: "user1",
    after: 3
  });

  expect(actual).toEqual(expected);
});

