//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
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

let parseObject = (obj) => {
    let entries = Object.entries(obj)

    entries.forEach(([key, value]) => {
    if (typeof(value) == "object" && value.some(entry => entry.oberwise == 'Chocolate')){
        console.log(`Favorite ${key} are as follows: `)
        Object.entries(value[0]).forEach(([key, value]) => {
            console.log(`Favorite ${key}: ${value}`)
        })
    } else{
        console.log(`Favorite ${key}: ${value}`)
    }
    
});
}

parseObject(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`This is ${this.name} and they are ${this.age} years old.`)
    }

    // Create another arrow function for the addAge method that takes a single parameter
    this.addAge = () => {
        this.age++
    }
}

let person1 = new Person('Justin', 29)
person1.printInfo()
// Adding to the age 
person1.addAge()
person1.addAge()
person1.addAge()
person1.printInfo()
let person2 = new Person('Steve', 22)
person2.printInfo()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

greaterThanTen = (str) => {
    return new Promise( (resolve, reject) => {
        if(str.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

greaterThanTen("Hello World")

.then( (result) => {
    console.log("Big word")
})
.catch( (error) => {
    console.log("Small Number")
})
