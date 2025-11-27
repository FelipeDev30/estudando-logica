let invoice = {
    name: "Felipe",
    age: 31,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado Mecânico", 129.90],
        2: ["Monitor 32", 899.99]
    }
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log(`-----------------------------`)

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
} 

// Output:
// O comprador é Felipe
// A idade é 31
// -----------------------------
// - mouse 2xwm: R$ 29.9
// - Teclado Mecânico: R$ 129.9
// - Monitor 32: R$ 899.99