function InvoiceSummary({
  subtotal,
  taxAmount,
  discountAmount,
  finalTotal
}) {
  return (
    <div className="form-card summary-card">
  <h2>Invoice Summary</h2>

      <p>Subtotal: ₹{subtotal}</p>

      <p>Tax: ₹{taxAmount}</p>

      <p>Discount: ₹{discountAmount}</p>

      <h3>Final Total: ₹{finalTotal}</h3>
    </div>
  )
}

export default InvoiceSummary