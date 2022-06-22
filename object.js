// Declarion of object
var infoTaken={
    name:"Alex",
    age:24,
    country:"England",
    school:"Harvard University"
}
var myMobile={
    name:"Realme",
    price:22990,
    showroom:"Rajshahi",
    offer:"power bank"
}
console.log(myMobile)

// access object property
console.log(myMobile.name)
console.log(myMobile.price)
console.log(myMobile.offer)

// set new object property

// one way
myMobile['price']=23000
myMobile['name']="Samsung"

// second way
myMobile.price=24000

console.log(myMobile)
