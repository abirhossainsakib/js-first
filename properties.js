var shopingCart = {
    books:3,
    sunglass: 1,
    kyeboard: 5,
    mouse:1,
    pen: 25,
}
// when i know the specific property name, use dot notation to get property value
var penCount = shopingCart.pen;
// alternative system
// when i know the specific property name, use dot notation to get property value
var penCount2 = shopingCart['pen'];

var properties = object.keys(shopingCart);
var propertyValues = object.values(shopingCart);
console.log()

console.log(shopingCart);