test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("adds 5-2 to equal 3", () => {
  expect(sub(5, 2)).toBe(3);
});
function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
