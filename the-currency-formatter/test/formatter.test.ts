import { formatCurrency } from "../src";

describe("Currency Formatter Tests", () => {
  test("formats INR correctly", () => {
    expect(formatCurrency(1000000, "INR")).toBe("₹ 10,00,000.00");
  });

  test("formats USD correctly", () => {
    expect(formatCurrency(1000000, "USD")).toBe("$ 1,000,000.00");
  });

  test("formats EUR correctly", () => {
    expect(formatCurrency(1000000, "EUR")).toBe("€ 1,000,000.00");
  });

  test("formats GBP correctly", () => {
    expect(formatCurrency(1000000, "GBP")).toBe("£ 1,000,000.00");
  });

  test("throws error for unsupported currency", () => {
    expect(() => formatCurrency(1000000, "XYZ")).toThrow("Currency code XYZ is not supported.");
  });
});
