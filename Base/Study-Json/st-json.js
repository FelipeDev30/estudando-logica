let invoice = {
    name: "Felipe",
    age: 30,
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

/* let name = "Felipe"
let age = 30
let products = ["Mouse 2xmw", "Teclado mecanico", "Monitor"]
let productsValues = [29.90, 129.99, 899.99]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products, productsValues, age){
    console.log(`O comprador é: ${name}`)
    console.log(`O comprador tem: ${age} anos`)
    console.log("-------------------------------------")
    console.log(`O produto é ${products[0]}`)
    console.log(`O valor é: ${productsValues[0]}`)
} */