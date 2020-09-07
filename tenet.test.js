const Tenet = require('./tenet');

test('exposes value', () => {
  expect(Tenet(1).value).toBe(1);
  expect(Tenet("Hello").value).toBe("Hello");
  expect(Tenet({ key: "val" }).value).toStrictEqual({ key: "val" });
});

test('modifies value with pure function', () => {
  expect(Tenet(1).apply(x => x + 1).value).toBe(2);
});
