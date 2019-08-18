const name = 'Kaustubh'
const age = 25

const user = {
    name,
    age,
    location: 'Mumbai'
}

const product = {
    label: 'Red notebook',
    price: 1,
    stock: 300,
    salePrice: undefined
}

// const {label, price, stock, salePrice} = product

// console.log(label)

const transaction=(type,{label,stock})=>{
    console.log(type,label,stock)
}

transaction('order',product)