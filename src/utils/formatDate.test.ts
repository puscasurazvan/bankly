import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("formats date to '24 June 2022'", () => {
    expect(formatDate("2022-06-24")).toBe("24 June 2022");
  });
  it("formats date to '1 January 2020'", () => {
    expect(formatDate("2020-01-01")).toBe("1 January 2020");
  });
});
