import { formatCurrency } from "./formatCurrency";

describe("formatCurrency", () => {
  it("formats GBP with £ and two decimals", () => {
    expect(formatCurrency(123.45, "GBP")).toBe(
      new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 2,
      }).format(123.45)
    );
  });
  it("formats EUR with € and two decimals", () => {
    expect(formatCurrency(123.45, "EUR")).toBe(
      new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
      }).format(123.45)
    );
  });
  it("formats USD with $ and two decimals", () => {
    expect(formatCurrency(123.45, "USD")).toBe(
      new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(123.45)
    );
  });
});
