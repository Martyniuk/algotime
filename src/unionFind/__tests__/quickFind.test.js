const QuickFind = require("../quickFind");

// Passing 30.05
describe.skip("Quick Find", () => {
  test("union and connected", () => {
    const quickFind = new QuickFind(10);

    quickFind.union(2, 1);
    const connected07A = quickFind.connected(0, 7);
    expect(connected07A).toBeFalsy();
    quickFind.union(5, 0);
    quickFind.union(7, 2);
    quickFind.union(6, 1);
    quickFind.union(1, 0);

    const connected07B = quickFind.connected(0, 7);
    expect(connected07B).toBeTruthy();
  });
});
