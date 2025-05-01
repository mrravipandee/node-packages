"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = void 0;
const CURRENCY_CONFIGS = {
    INR: { currencySymbol: "₹", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "INR" },
    USD: { currencySymbol: "$", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "USD" },
    EUR: { currencySymbol: "€", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "EUR" },
    GBP: { currencySymbol: "£", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "GBP" },
    JPY: { currencySymbol: "¥", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "JPY" },
    // Add other currencies as needed
};
const formatCurrency = (amount, currencyCode = "INR") => {
    const config = CURRENCY_CONFIGS[currencyCode];
    if (!config) {
        throw new Error(`Currency code ${currencyCode} is not supported.`);
    }
    const [integerPart, decimalPart] = amount.toFixed(2).split(".");
    let formattedAmount = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, config.thousandSeparator);
    if (decimalPart) {
        formattedAmount += config.decimalSeparator + decimalPart;
    }
    return `${config.currencySymbol} ${formattedAmount}`;
};
exports.formatCurrency = formatCurrency;
