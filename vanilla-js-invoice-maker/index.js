const html2pdf = require("html2pdf.js");

function generateInvoice(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return console.error("Container not found!");

  const {
    companyName, companyAddress, companyPhone, companyEmail,
    clientName, clientCompany, clientAddress, invoiceDate,
    invoiceNumber, items, taxRate
  } = data;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = (subtotal * taxRate) / 100;
  const total = subtotal + tax;

  container.innerHTML = `
    <div id="invoice-content" style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ddd;">
      <h1 style="text-align:center;">${companyName}</h1>
      <p style="text-align:center;">
        ${companyAddress}<br/>
        ${companyPhone} | ${companyEmail}
      </p>
      <hr/>
      <p><strong>Client:</strong> ${clientName} (${clientCompany})<br/>${clientAddress}</p>
      <p><strong>Date:</strong> ${invoiceDate} | <strong>Invoice #:</strong> ${invoiceNumber}</p>
      <table border="1" cellspacing="0" cellpadding="8" style="width: 100%; margin-top: 10px; border-collapse: collapse;">
        <thead style="background: #f0f0f0;">
          <tr>
            <th align="left">Item</th>
            <th align="right">Qty</th>
            <th align="right">Price</th>
            <th align="right">Total</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(item => `
            <tr>
              <td>${item.name}</td>
              <td align="right">${item.qty}</td>
              <td align="right">₹${item.price.toFixed(2)}</td>
              <td align="right">₹${(item.price * item.qty).toFixed(2)}</td>
            </tr>`).join('')}
          <tr>
            <td colspan="3" align="right"><strong>Subtotal</strong></td>
            <td align="right">₹${subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td colspan="3" align="right">Tax (${taxRate}%)</td>
            <td align="right">₹${tax.toFixed(2)}</td>
          </tr>
          <tr>
            <td colspan="3" align="right"><strong>Total</strong></td>
            <td align="right"><strong>₹${total.toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </table>
      <button id="download-btn" style="margin-top: 20px; padding: 10px 20px; font-size: 16px; cursor: pointer;">
        Download PDF
      </button>
    </div>
  `;

  const downloadBtn = document.getElementById("download-btn");
  downloadBtn?.addEventListener("click", () => {
    const invoiceElement = document.getElementById("invoice-content");
    html2pdf().from(invoiceElement).save(`Invoice-${invoiceNumber}.pdf`);
  });
}

module.exports = generateInvoice;
