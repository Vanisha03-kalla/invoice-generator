function InvoicePreview({
  seller,
  client,
  invoiceInfo,
  items,
  subtotal,
  taxAmount,
  discountAmount,
  finalTotal,
  formatCurrency
}) {
  return (
    <div className="invoice-preview" id="invoice-preview">
      <div className="invoice-header">
  <div>
    <p className="invoice-label">PROFESSIONAL INVOICE</p>
    <h2>Invoice</h2>
  </div>

  <div className="invoice-badge">
    #{invoiceInfo.invoiceNumber || "0001"}
  </div>
</div>

      <div className="invoice-parties">

  <div>
    <h3>From</h3>
    <p>{seller.name}</p>
    <p>{seller.address}</p>
    <p>{seller.phone}</p>
    <p>{seller.email}</p>
  </div>

  <div>
    <h3>Bill To</h3>
    <p>{client.name}</p>
    <p>{client.address}</p>
    <p>{client.phone}</p>
    <p>{client.email}</p>
  </div>

</div>
<h3>Invoice Information</h3>

<p>Invoice Number: {invoiceInfo.invoiceNumber}</p>
<p>Issue Date: {invoiceInfo.issueDate}</p>
<p>Due Date: {invoiceInfo.dueDate}</p>

<h3>Items</h3>

<div className="invoice-table-wrapper">
<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Amount</th>
    </tr>
  </thead>

  <tbody>
  {items.map((item) => (
    <tr key={item.id}>
      <td>{item.description}</td>
      <td>{item.quantity}</td>
      <td>{formatCurrency(item.price)}</td>
      <td>{formatCurrency(item.quantity * item.price)}</td>
    </tr>
  ))}
</tbody>
</table>
</div>

<div className="invoice-totals">
  <p>
    <span>Subtotal</span>
    <span>₹{subtotal}</span>
  </p>

  <p>
    <span>Tax</span>
    <span>₹{taxAmount}</span>
  </p>

  <p>
    <span>Discount</span>
    <span>- ₹{discountAmount}</span>
  </p>

  <div className="invoice-total-final">
    <span>Total</span>
    <span>₹{finalTotal}</span>
  </div>
</div>
    </div>
  )
}

export default InvoicePreview