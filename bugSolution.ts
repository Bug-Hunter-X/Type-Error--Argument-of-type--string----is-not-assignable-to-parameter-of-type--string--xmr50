function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane User", "John User"];

for (let i = 0; i < user.length; i++){
    console.log(greeter(user[i]));
}
//Alternative using map
console.log(user.map(greeter));