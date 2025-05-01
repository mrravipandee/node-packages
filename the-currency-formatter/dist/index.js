"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = void 0;
const CURRENCY_CONFIGS = {
    INR: { currencySymbol: "₹", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "INR" },
    USD: { currencySymbol: "$", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "USD" },
    EUR: { currencySymbol: "€", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "EUR" },
    GBP: { currencySymbol: "£", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "GBP" },
    JPY: { currencySymbol: "¥", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "JPY" },
    CAD: { currencySymbol: "$", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "CAD" },
    AUD: { currencySymbol: "$", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "AUD" },
    CHF: { currencySymbol: "CHF", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "CHF" },
    SEK: { currencySymbol: "kr", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "SEK" },
    DKK: { currencySymbol: "kr", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "DKK" },
    NOK: { currencySymbol: "kr", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "NOK" },
    MXN: { currencySymbol: "$", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "MXN" },
    BRL: { currencySymbol: "R$", thousandSeparator: ".", decimalSeparator: ",", currencyCode: "BRL" },
    ZAR: { currencySymbol: "R", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "ZAR" },
    CNY: { currencySymbol: "¥", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "CNY" },
    KRW: { currencySymbol: "₩", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "KRW" },
    SAR: { currencySymbol: "ر.س", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "SAR" },
    AED: { currencySymbol: "د.إ", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "AED" },
    THB: { currencySymbol: "฿", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "THB" },
    IDR: { currencySymbol: "Rp", thousandSeparator: ".", decimalSeparator: ",", currencyCode: "IDR" },
    RUB: { currencySymbol: "₽", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "RUB" },
    MYR: { currencySymbol: "RM", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "MYR" },
    ARS: { currencySymbol: "$", thousandSeparator: ".", decimalSeparator: ",", currencyCode: "ARS" },
    CLP: { currencySymbol: "$", thousandSeparator: ".", decimalSeparator: ",", currencyCode: "CLP" },
    COP: { currencySymbol: "$", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "COP" },
    HUF: { currencySymbol: "Ft", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "HUF" },
    VND: { currencySymbol: "₫", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "VND" },
    EGP: { currencySymbol: "ج.م", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "EGP" },
    KES: { currencySymbol: "KSh", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "KES" },
    NGN: { currencySymbol: "₦", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "NGN" },
    PKR: { currencySymbol: "₨", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "PKR" },
    LKR: { currencySymbol: "Rs", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "LKR" },
    BDT: { currencySymbol: "৳", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "BDT" },
    JMD: { currencySymbol: "$", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "JMD" },
    TWD: { currencySymbol: "NT$", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "TWD" },
    PHP: { currencySymbol: "₱", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "PHP" },
    NZD: { currencySymbol: "$", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "NZD" },
    ILS: { currencySymbol: "₪", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "ILS" },
    HRK: { currencySymbol: "kn", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "HRK" },
    RON: { currencySymbol: "lei", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "RON" },
    CZK: { currencySymbol: "Kč", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "CZK" },
    DOP: { currencySymbol: "$", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "DOP" },
    PEN: { currencySymbol: "S/", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "PEN" },
    // Add additional countries/currencies as required
    BOB: { currencySymbol: "Bs", thousandSeparator: ".", decimalSeparator: ",", currencyCode: "BOB" },
    MUR: { currencySymbol: "₨", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "MUR" },
    TZS: { currencySymbol: "TSh", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "TZS" },
    KWD: { currencySymbol: "د.ك", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "KWD" },
    QAR: { currencySymbol: "ر.ق", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "QAR" },
    OMR: { currencySymbol: "ر.ع.", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "OMR" },
    BHD: { currencySymbol: "د.ب", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "BHD" },
    LBP: { currencySymbol: "ل.ل", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "LBP" },
    GHS: { currencySymbol: "GH₵", thousandSeparator: ",", decimalSeparator: ".", currencyCode: "GHS" },
};
const formatCurrency = (amount, currencyCode = "INR") => {
    const config = CURRENCY_CONFIGS[currencyCode];
    if (!config) {
        throw new Error(`Currency code ${currencyCode} is not supported.`);
    }
    // Format the number with thousand separators
    const [integerPart, decimalPart] = amount.toFixed(2).split(".");
    let formattedAmount = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, config.thousandSeparator);
    // If there's a decimal part, append it with the decimal separator
    if (decimalPart) {
        formattedAmount += config.decimalSeparator + decimalPart;
    }
    return `${config.currencySymbol} ${formattedAmount}`;
};
exports.formatCurrency = formatCurrency;
