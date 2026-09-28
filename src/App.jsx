import SellerForm from './components/SellerForm'
import ClientForm from './components/ClientForm'
import InvoiceItems from './components/InvoiceItems'
import { useState } from 'react'
import InvoiceInfo from './components/InvoiceInfo'
import InvoiceSummary from './components/InvoiceSummary'
import InvoicePreview from './components/InvoicePreview'
import jsPDF from "jspdf"
import html2canvas from "html2canvas"




function App() {
  const [seller, setSeller] = useState({
  name: "",
  address: "",
  phone: "",
  email: ""
})

const [client, setClient] = useState({
  name: "",
  address: "",
  phone: "",
  email: ""
})

const [invoiceInfo, setInvoiceInfo] = useState({
  invoiceNumber: "",
  issueDate: "",
  dueDate: ""
})

const [items, setItems] = useState([
  {
    id: 1,
    description: "",
    quantity: 1,
    price: 0
  }
])

const [taxRate, setTaxRate] = useState(18)

const [discountRate, setDiscountRate] = useState(0)

const subtotal = items.reduce((total, item) => {
  return total + item.quantity * item.price
}, 0)

const taxAmount = subtotal * taxRate / 100

const discountAmount = subtotal * discountRate / 100

const finalTotal = subtotal + taxAmount - discountAmount

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  }).format(amount)
}

const downloadPDF = async () => {

  if (!seller.name.trim()) {
  alert("Please enter seller name.")
  return
}

if (!client.name.trim()) {
  alert("Please enter client name.")
  return
}

if (!invoiceInfo.invoiceNumber.trim()) {
  alert("Please enter invoice number.")
  return
}

if (!invoiceInfo.issueDate) {
  alert("Please select issue date.")
  return
}

if (!invoiceInfo.dueDate) {
  alert("Please select due date.")
  return
}

if (invoiceInfo.dueDate < invoiceInfo.issueDate) {
  alert("Due date cannot be before issue date.")
  return
}

if (seller.email && !seller.email.includes("@")) {
  alert("Please enter a valid seller email.")
  return
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if (seller.email && !emailPattern.test(seller.email)) {
  alert("Please enter a valid seller email.")
  return
}

if (client.email && !emailPattern.test(client.email)) {
  alert("Please enter a valid client email.")
  return
}

const phonePattern = /^[6-9]\d{9}$/

if (seller.phone && !phonePattern.test(seller.phone)) {
  alert("Please enter a valid seller phone number.")
  return
}

if (client.phone && !phonePattern.test(client.phone)) {
  alert("Please enter a valid client phone number.")
  return
}
  const invoice = document.getElementById("invoice-preview")

  const canvas = await html2canvas(invoice, {
    scale: 2
  })

  const imgData = canvas.toDataURL("image/png")

  const pdf = new jsPDF("p", "mm", "a4")

  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)

  pdf.save("invoice.pdf")
}
  
    return (
  <div className="app-container">
    <h1 className="app-title">Invoice Generator</h1>
<p className="app-subtitle">
  Create professional invoices in minutes.
</p>
     <div className="row g-4">
  <div className="col-lg-6">
    <SellerForm seller={seller} setSeller={setSeller} />
  </div>

  <div className="col-lg-6">
    <ClientForm client={client} setClient={setClient} />
  </div>
</div>
      <InvoiceInfo
  invoiceInfo={invoiceInfo}
  setInvoiceInfo={setInvoiceInfo}
/>
      <InvoiceItems
  items={items}
  setItems={setItems}
  taxRate={taxRate}
  setTaxRate={setTaxRate}
  discountRate={discountRate}
  setDiscountRate={setDiscountRate}
/>

<InvoiceSummary
  subtotal={subtotal}
  taxAmount={taxAmount}
  discountAmount={discountAmount}
  finalTotal={finalTotal}
/>

<InvoicePreview
  seller={seller}
  client={client}
  invoiceInfo={invoiceInfo}
  items={items}
  subtotal={subtotal}
  taxAmount={taxAmount}
  discountAmount={discountAmount}
  finalTotal={finalTotal}
  formatCurrency={formatCurrency}
/>

<button
  onClick={downloadPDF}
  className="download-pdf-btn"
>
  Download PDF
</button>
    </div>
  )
}

export default App