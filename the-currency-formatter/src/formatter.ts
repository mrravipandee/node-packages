type CurrencyOptions = {
  currencySymbol: string;
  thousandSeparator: string;
  decimalSeparator: string;
  currencyCode: string;
  useIndianGrouping?: boolean;
};

const CURRENCY_CONFIGS: { [key: string]: CurrencyOptions } = {
  INR: {
    currencySymbol: "₹",
    thousandSeparator: ",",
    decimalSeparator: ".",
    currencyCode: "INR",
    useIndianGrouping: true,
  },
  USD: { currencySymbol: "$", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "USD" },
  EUR: { currencySymbol: "€", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "EUR" },
  GBP: { currencySymbol: "£", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "GBP" },
  JPY: { currencySymbol: "¥", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "JPY" },
  // Add more as needed
};

export const formatCurrency = (amount: number, currencyCode: string = "INR"): string => {
  const config = CURRENCY_CONFIGS[currencyCode];

  if (!config) {
    throw new Error(`Currency code ${currencyCode} is not supported.`);
  }

  const [integerPart, decimalPart] = amount.toFixed(2).split(".");

  let formattedInteger = "";

  if (config.useIndianGrouping) {
    // 👉 Format Indian number grouping (e.g., 12,34,567)
    const lastThree = integerPart.slice(-3);
    const rest = integerPart.slice(0, -3);
    formattedInteger =
      rest.replace(/\B(?=(\d{2})+(?!\d))/g, config.thousandSeparator) +
      (rest ? config.thousandSeparator : "") +
      lastThree;
  } else {
    // 👉 Western (e.g., 1,234,567)
    formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, config.thousandSeparator);
  }

  return `${config.currencySymbol} ${formattedInteger}${config.decimalSeparator}${decimalPart}`;
};
