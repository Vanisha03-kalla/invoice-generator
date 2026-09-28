function ClientForm({ client, setClient }) {
  return (
    <div className="form-card">
  <h2>Client Details</h2>

      <input
  type="text"
  placeholder="Client Name"
  value={client.name}
  onChange={(event) =>
    setClient({
      ...client,
      name: event.target.value
    })
  }
/>

      <input
  type="text"
  placeholder="Address"
  value={client.address}
  onChange={(event) =>
    setClient({
      ...client,
      address: event.target.value
    })
  }
/>

      <input
  type="text"
  placeholder="Phone"
  value={client.phone}
  onChange={(event) =>
    setClient({
      ...client,
      phone: event.target.value
    })
  }
/>
      <input
  type="email"
  placeholder="Email"
  value={client.email}
  onChange={(event) =>
    setClient({
      ...client,
      email: event.target.value
    })
  }
/>
    </div>
  )
}

export default ClientForm