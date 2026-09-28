function InvoiceItems({
  items,
  setItems,
  taxRate,
  setTaxRate,
  discountRate,
  setDiscountRate
}) {
  const addItem = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        description: "",
        quantity: 1,
        price: 0
      }
    ])
  }

  const subtotal = items.reduce((total, item) => {
    return total + item.quantity * item.price
  }, 0)

  const taxAmount = subtotal * taxRate / 100

  const discountAmount = subtotal * discountRate / 100

  const finalTotal = subtotal + taxAmount - discountAmount

  return (
<div className="form-card">
  <div className="section-heading">
  <div>
    <h2>Invoice Items</h2>
    <p>Add the products or services you want to include.</p>
  </div>
</div>
      {items.map((item) => (
  <div className="invoice-item-row" key={item.id}>

          
         <div
  className="invoice-item-row"
  key={item.id}
>
  <div className="item-inputs">

    <div className="item-description">
      <label>Description</label>

      <input
        type="text"
        placeholder="e.g. Website Design"
        value={item.description}
        onChange={(event) => {
          const updatedItems = items.map((i) =>
            i.id === item.id
              ? {
                  ...i,
                  description: event.target.value
                }
              : i
          )

          setItems(updatedItems)
        }}
      />
    </div>

    <div className="item-small-field">
      <label>Quantity</label>

      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(event) => {
          const updatedItems = items.map((i) =>
            i.id === item.id
              ? {
                  ...i,
                  quantity: Number(event.target.value)
                }
              : i
          )

          setItems(updatedItems)
        }}
      />
    </div>

    <div className="item-small-field">
      <label>Unit Price</label>

      <input
        type="number"
        min="0"
        placeholder="0"
        value={item.price}
        onChange={(event) => {
          const updatedItems = items.map((i) =>
            i.id === item.id
              ? {
                  ...i,
                  price: Number(event.target.value)
                }
              : i
          )

          setItems(updatedItems)
        }}
      />
    </div>

  </div>

  <button
    className="remove-item-btn"
    onClick={() => {
      const updatedItems = items.filter(
        (i) => i.id !== item.id
      )

      setItems(updatedItems)
    }}
  >
    Remove
  </button>
</div>

        </div>
      ))}

      <button  className="add-item-btn" onClick={addItem}>
        + Add Item
      </button>

      <div className="invoice-item-summary">

  <p>
    <span>Subtotal</span>
    <span>₹{subtotal}</span>
  </p>

  <div className="adjustment-row">
    <label htmlFor="tax-rate">Tax</label>

    <div className="percentage-input">
      <input
        id="tax-rate"
        type="number"
        min="0"
        max="100"
        value={taxRate}
        onChange={(event) => {
          const value = Number(event.target.value)

          if (value >= 0 && value <= 100) {
            setTaxRate(value)
          }
        }}
      />

      <span>%</span>
    </div>
  </div>

  <div className="adjustment-row">
    <label htmlFor="discount-rate">Discount</label>

    <div className="percentage-input">
      <input
        id="discount-rate"
        type="number"
        min="0"
        max="100"
        value={discountRate}
        onChange={(event) => {
          const value = Number(event.target.value)

          if (value >= 0 && value <= 100) {
            setDiscountRate(value)
          }
        }}
      />

      <span>%</span>
    </div>
  </div>

  <p>
    <span>Tax Amount</span>
    <span>₹{taxAmount}</span>
  </p>

  <p>
    <span>Discount Amount</span>
    <span>- ₹{discountAmount}</span>
  </p>

  <h2 className="invoice-items-total">
    <span>Final Total</span>
    <span>₹{finalTotal}</span>
  </h2>

</div>
    </div>
  )
}

export default InvoiceItems