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
        type="tel" /*type="tel" browser ko batata hai:
"Ye field telephone number ke liye hai." */
maxLength="10"
        placeholder="Phone"
        value={seller.phone}

        onChange={(event) => {
  const value = event.target.value.replace(/\D/g, "")/*.replace(/\D/g, "")
→ string mein jo digits nahi hain, unko remove kar do. */
/*Ye regular expression hai:

\D = anything that is NOT a digit
g = poori string mein check karo, sirf first character nahi */

  setSeller({
    ...seller,
    phone: value
  })
}}
required
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