// Question1:///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

function logItems(array){
    for(let i = 0; i < array.length; i++){
        console.log(`=======================================`);
        console.log(`Name: ${shopItems[i].name}`);
        console.log(`Price: ${shopItems[i].price}`);
        console.log(`About: ${shopItems[i].desc}`);
        console.log(`Category: ${shopItems[i].category}`);
    }
}

logItems(shopItems)


// Question 2:///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:
// ```
// pizza contains:
// Deep Dish
// South Side Thin Crust
// tacos contains:
// Anything not from Taco bell
// burgers contains:
// Portillos Burgers
// ice_cream contains:
// Chocolate
// Vanilla
// Oreo
// shakes contains:
// oberwise contains:
// Chocolate
// dunkin contains:
// Vanilla
// culvers contains:
// All of them
// mcDonalds contains:
// Sham-rock-shake
// cupids_candies contains:
// Chocolate Malt
// ```
// Note:  The solution should work on any object with values of strings, numbers, objects, and arrays not just this specific object

const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function logFood(obj){
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key} contains:`);
        if(typeof value === "string"){
            console.log(value)
        }else if(typeof value === "object"){
            for (const [k, v] of Object.entries(value)) {
                if(typeof v === "string"){
                    console.log(v)
            }else if(typeof v === "object"){
                for (const [k1, v1] of Object.entries(v)) {
                    if (typeof v1 === "string"){
                        console.log(`${k1} contains:`)
                        console.log(v1)
                }
            }
            }
}}}}

logFood(hwPerson)

// Question 3:///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a Promised based function that will check a string to determine if it's length is greater than 10.

// If the length is greater than 10 then resolve it and console log "Big word". 

// If the length of the string is less than 10 then reject it and  console log "Small String"

function myPromiseBasedFunction(str){
    return new Promise((resolve, reject) => {
        str.length > 10 ? resolve("Big word") : reject("Small String")
    })
}
myPromiseBasedFunction("hbjihccgfchbvjvhg").then((res) => console.log(res)).catch((err) => console.log(err))
myPromiseBasedFunction("hbjihccgf").then((res) => console.log(res)).catch((err) => console.log(err))

//Question 4://////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
Create a base class of GameMember and 2 children classes of Dealer, Player

both dealer and player have:

hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers

hit() : ability to add  a random number [1-13] to their hand

When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)

When a Player hits they can hit as long as their total is under 21

Use the randomNumber function provided below to gernerate a random number 1-12  */


const randomNumber = () => Math.ceil(Math.random() * 13) // returns a random number 1-13 (including 13) represent A-K

class GameMember{
    constructor(name){
        this.name = name
        console.log(`Welcome ${this.name}`)
    }
}

class Dealer extends GameMember{
    constructor(name){
        super(name)
        this.hand = [randomNumber(), randomNumber()]
    }
    hit (){this.hand.reduce((a,b) => a + b, 0) < 17 ? this.hand.push(randomNumber()) :console.log("Dealer got " + this.hand.reduce((a,b) => a + b, 0))}
}

class Player extends GameMember{
    constructor(name){
        super(name)
        this.hand = [randomNumber(), randomNumber()]
    }
    hit (){this.hand.reduce((a,b) => a + b, 0) <= 21 ? this.hand.push(randomNumber()) : console.log(this.hand.reduce((a,b) => a + b, 0) + " Player BUSTED")}
}

//testing/////////////////////////////////////
var dealer = new Dealer("Bad Dealer")
var player = new Player("Good Player")
console.log(dealer)
console.log(player)

player.hit()
player.hit()
player.hit()
player.hit()

dealer.hit()
dealer.hit()
dealer.hit()
dealer.hit()
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 5:
// 1:
https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
var binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2) // join the array into a string and parse it into a base 2 number binary
  }

// 2:
https://www.codewars.com/kata/5839edaa6754d6fec10000a2/javascript

function findMissingLetter(array){
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var firstLetter = array[0]
    var firstLetterIndex = alphabet.indexOf(firstLetter)
  
    for(let i = 0; i < array.length; i++){
        if (array[i] !== alphabet[alphabet.indexOf(firstLetter) + i]){
            console.log(firstLetterIndex + i)
            return alphabet[alphabet.indexOf(firstLetter) + i]
}
}}
console.log(findMissingLetter(['j','k','m'])) 

// 3:
https://www.codewars.com/kata/56269eb78ad2e4ced1000013/javascript
function findNextSquare(sq) {
    a = Math.sqrt(sq)
   if (a % 1 === 0){
        return (a + 1) ** 2
   }
   else{
       return -1
   }
  }