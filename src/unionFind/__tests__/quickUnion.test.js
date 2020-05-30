const QuickUnion = require("../quickUnion");

describe("Quick Union", () => {
  test("connected", () => {
    const quickUnion = new QuickUnion(10);

    const connected02 = quickUnion.connected(0, 2);
    expect(connected02).toBeFalsy();
  });

  test("union", () => {
    const quickUnion = new QuickUnion(10);

    const connected02A = quickUnion.connected(0, 2);
    expect(connected02A).toBeFalsy();
    quickUnion.union(0, 2);
    const connected02B = quickUnion.connected(0, 2);
    expect(connected02B).toBeTruthy();
  });

  test.skip("root for Non weighted UF", () => {
    const quickUnion = new QuickUnion(5);

    quickUnion.union(2, 3);
    quickUnion.union(1, 2);
    const rootOf1 = quickUnion.getRootOf(1);
    expect(rootOf1).toBe(3);
  });
});
