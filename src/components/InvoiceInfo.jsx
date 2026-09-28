function InvoiceInfo({ invoiceInfo, setInvoiceInfo }) {
  return (
    <div className="form-card">
  <h2>Invoice Information</h2>

      <input
        type="text"
        placeholder="Invoice Number"
        value={invoiceInfo.invoiceNumber}
        onChange={(event) =>
          setInvoiceInfo({
            ...invoiceInfo,
            invoiceNumber: event.target.value
          })
        }
      />

<label>Issue Date</label>
      <input
        type="date"
        value={invoiceInfo.issueDate}
        onChange={(event) =>
          setInvoiceInfo({
            ...invoiceInfo,
            issueDate: event.target.value
          })
        }
      />
<label>Due Date</label>
      <input
        type="date"
        value={invoiceInfo.dueDate}
        onChange={(event) =>
          setInvoiceInfo({
            ...invoiceInfo,
            dueDate: event.target.value
          })
        }
      />
    </div>
  )
}

export default InvoiceInfo