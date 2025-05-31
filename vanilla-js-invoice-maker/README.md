# Invoice Generator JS

A lightweight and easy-to-use JavaScript invoice generator that works with **Vanilla JS, React, Next.js, Angular**, and more. Generates a professional invoice in HTML and allows users to **download it as PDF** using `html2pdf.js`.

---

## 🚀 Features

- 📄 Generate professional invoices
- 📦 Works in React, Next.js, Angular, and Vanilla JS
- 🧾 Add client and company details, items, taxes
- 📥 Download invoice as PDF (via `html2pdf.js`)
- 🎯 Easy integration with any frontend project

---

## 📦 Installation

Install via npm:

```bash
npm install vanilla-js-invoice-generator
```

Or include directly via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/vanilla-js-invoice-generator@latest"></script>
```

---

## 🛠️ Usage

### 1. Create a Container

Add a container in your HTML where the invoice will be rendered:

```html
<div id="invoice-container"></div>
```

### 2. Use `generateInvoice`

Import and call the function:

```js
import { generateInvoice } from 'vanilla-js-invoice-generator';

generateInvoice('invoice-container', {
  companyName: "Forange Inc",
  companyAddress: "Nashik, India",
  companyPhone: "+91 1234567890",
  companyEmail: "support@forangex.com",

  clientName: "Ravi Pandey",
  clientCompany: "Freelancer",
  clientAddress: "Patna, Bihar",

  invoiceDate: "28/05/2025",
  invoiceNumber: "INV-1001",

  items: [
    { name: "Website Development", qty: 1, price: 5000 },
    { name: "Hosting Services", qty: 1, price: 2000 }
  ],

  taxRate: 18
});
```

### 3. Enable PDF Download

Make sure to include `html2pdf.js` for PDF support:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
```

A "Download PDF" button will automatically appear at the bottom of the invoice.

---

## 🖼️ Output Sample

- Company and client information
- Table of items with quantity, price, and total
- Tax calculation
- Download PDF button

---

## 🔧 Configuration Options

| Option          | Type     | Description                            |
|-----------------|----------|----------------------------------------|
| `companyName`   | `string` | Your company name                      |
| `companyAddress`| `string` | Company address                        |
| `companyPhone`  | `string` | Contact phone                          |
| `companyEmail`  | `string` | Contact email                          |
| `clientName`    | `string` | Client name                            |
| `clientCompany` | `string` | Client company name                    |
| `clientAddress` | `string` | Client address                         |
| `invoiceDate`   | `string` | Invoice creation date                  |
| `invoiceNumber` | `string` | Unique invoice number                  |
| `items`         | `array`  | List of invoice items with `name`, `qty`, `price` |
| `taxRate`       | `number` | Tax percentage (e.g. `18`)             |

---

## 🧪 Test Locally

Create a `test.html` file:

```html
<script src="https://cdn.jsdelivr.net/npm/vanilla-js-invoice-generator@latest"></script>
<script>
  generateInvoice('invoice-container', { ... });
</script>
```

---

## 👨‍💻 Author

**Ravi Pandey**  
🌐 [https://imravidev.vercel.app](https://imravidev.vercel.app)  
📧 imravipanday@gmail.com  

---

## 📄 License

This project is licensed under the MIT License.
