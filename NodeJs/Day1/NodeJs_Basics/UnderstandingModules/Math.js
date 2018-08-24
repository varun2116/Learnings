function Add(x,y) {
    return x + y;
}

function Product(x,y) {
    return x * y;
}

const PI = 3.145;

// module.exports.Addition = Add;
// module.exports.Multiplication = Product;

module.exports = {
    Addition: Add,
    Multiplication: Product,
    PI:PI
}