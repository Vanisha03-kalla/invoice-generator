function SellerForm({ seller, setSeller }) {
  return (
    
      <div className="form-card">
  <h2>Seller Details</h2>

      <input
        type="text"
        placeholder="Seller Name"
        value={seller.name}
        onChange={(event) =>
          setSeller({
            ...seller,
            name: event.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Address"
        value={seller.address}
        onChange={(event) =>
          setSeller({
            ...seller,
            address: event.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Phone"
        value={seller.phone}
        onChange={(event) =>
          setSeller({
            ...seller,
            phone: event.target.value
          })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={seller.email}
        onChange={(event) =>
          setSeller({
            ...seller,
            email: event.target.value
          })
        }
      />
    </div>
  )
}

export default SellerForm