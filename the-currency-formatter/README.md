
# Indian Currency Formatter

A simple utility to format numbers as currency values in various formats, including Indian, USD, EUR, GBP, and more!

## Installation

You can install the package via npm:

```bash
npm install indian-currency-formatter
```

## Usage

### Format Currency

```ts
import { formatCurrency } from 'indian-currency-formatter';

const amount = 1234567.89;

console.log(formatCurrency(amount, "INR"));  // ₹ 12,34,567.89
console.log(formatCurrency(amount, "USD"));  // $ 1,234,567.89
```

### Supported Currencies

Here’s a list of supported currencies along with their symbols:

- INR (₹) - Indian Rupee
- USD ($) - United States Dollar
- EUR (€) - Euro
- GBP (£) - British Pound
- JPY (¥) - Japanese Yen
- CAD ($) - Canadian Dollar
- AUD ($) - Australian Dollar
- CHF (CHF) - Swiss Franc
- SEK (kr) - Swedish Krona
- DKK (kr) - Danish Krone
- MXN ($) - Mexican Peso
- BRL (R$) - Brazilian Real
- ZAR (R) - South African Rand
- CNY (¥) - Chinese Yuan
- KRW (₩) - South Korean Won
- SAR (ر.س) - Saudi Riyal
- AED (د.إ) - UAE Dirham
- THB (฿) - Thai Baht
- IDR (Rp) - Indonesian Rupiah
- RUB (₽) - Russian Ruble
- MYR (RM) - Malaysian Ringgit
- ARS ($) - Argentine Peso
- CLP ($) - Chilean Peso
- COP ($) - Colombian Peso
- HUF (Ft) - Hungarian Forint
- VND (₫) - Vietnamese Dong
- EGP (ج.م) - Egyptian Pound
- KES (KSh) - Kenyan Shilling
- NGN (₦) - Nigerian Naira
- PKR (₨) - Pakistani Rupee
- LKR (Rs) - Sri Lankan Rupee
- BDT (৳) - Bangladeshi Taka
- JMD ($) - Jamaican Dollar
- TWD (NT$) - New Taiwan Dollar
- PHP (₱) - Philippine Peso
- NZD ($) - New Zealand Dollar
- ILS (₪) - Israeli Shekel
- HRK (kn) - Croatian Kuna
- RON (lei) - Romanian Leu
- CZK (Kč) - Czech Koruna
- DOP ($) - Dominican Peso
- PEN (S/) - Peruvian Nuevo Sol

## Contributing

If you'd like to contribute, feel free to fork the repository and submit a pull request with your changes. Please make sure your code adheres to the following:

- Follow the code style of the project.
- Add tests for any new functionality.
- Make sure all tests pass before submitting a PR.

We welcome contributions and are happy to accept new currencies or any improvements to the formatting logic. If you have any ideas or suggestions, open an issue or submit a pull request!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
