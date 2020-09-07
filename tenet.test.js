const Tenet = require('./tenet');

test('exposes value', () => {
  expect(Tenet(1).value).toBe(1);
  expect(Tenet("Hello").value).toBe("Hello");
  expect(Tenet({ key: "val" }).value).toStrictEqual({ key: "val" });
});

test('modifies value with pure function', () => {
  expect(Tenet(1).apply(x => x + 1).value).toBe(2);
  expect(Tenet(1).apply(x => x + 1).apply(x => x + 3).value).toBe(5);
  expect(Tenet("Hello").apply(x => `${x} World`).value).toBe("Hello World");
  expect(Tenet([1,2,3]).apply(x => x.reverse()).value).toStrictEqual([3,2,1]);
});

test('inverts modified value', () => {
  expect(Tenet(1).apply(x => x + 1).invert().value).toBe(1);
  expect(Tenet(1).apply(x => x + 1).apply(x => x + 3).invert().value).toBe(2);
  expect(Tenet(1).apply(x => x + 1).apply(x => x + 3).invert().invert().value).toBe(1);

  expect(Tenet("Hello").apply(x => `${x} World`).invert().value).toBe("Hello");
});

test('throws error when it is not invertible', () => {
  expect(() => { Tenet(1).invert() }).toThrowError();
  expect(() => { Tenet(1).apply(x => x + 1).invert().invert() }).toThrowError();
})

test('stores modified states in the object', () => {
  const t = Tenet(1)
  expect(t.value).toBe(1)

  t.apply(x => x + 1)
  expect(t.value).toBe(2)

  t.apply(x => x * 3)
  expect(t.value).toBe(6)

  t.invert()
  expect(t.value).toBe(2)

  t.invert()
  expect(t.value).toBe(1)

  expect(() => { t.invert() }).toThrowError();
})
