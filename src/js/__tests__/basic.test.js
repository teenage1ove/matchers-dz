import sort from '../app';

test('sort', () => {
  const result = sort([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]);

  expect(result).toEqual(
    [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ]
  );
});
