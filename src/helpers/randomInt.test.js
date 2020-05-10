import randomInt from './randomInt';

it('Generates a random int between interval', () => {
  const random = randomInt(1, 5);

  expect(random).toBeGreaterThanOrEqual(1);
  expect(random).toBeLessThanOrEqual(5);
});
