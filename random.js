// Create a person object that contains three keys: name, age, and county.
let person = {
    name: "pratham",
    age: 21,
    county: "Windsor"
}

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

function logData(){
    let str = person.name + " is " + person.age + " years old and lives in " + person.county
    console.log(str)
}

logData()