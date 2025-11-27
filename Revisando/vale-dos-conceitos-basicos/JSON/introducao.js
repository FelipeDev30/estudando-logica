
// JSON estruturado
const invoice = {
    "name": "Felipe",
    "age": 31,
    "products": [
        {
            "id": 0,
            "name": "mouse 2xwm",
            "price": 29.90
        },
        {
            "id": 1,
            "name": "Teclado Mecânico",
            "price": 129.90
        },
        {
            "id": 2,
            "name": "Monitor 32",
            "price": 899.99
        }
    ]
};

// Função para gerar a fatura
function generateInvoice(invoice) {
    console.log(`O comprador é ${invoice.name}`);
    console.log(`A idade é ${invoice.age}`);
    console.log(`-----------------------------`);

    invoice.products.forEach(product => {
        console.log(`- ${product.name}: R$ ${product.price.toFixed(2)}`);
    });
}

// Executa a função
generateInvoice(invoice);
