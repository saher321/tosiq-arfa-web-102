// function overloading
function greetings (name, timeOfDay) {
    if (!name && !timeOfDay) return "Hello";
    if (name && !timeOfDay) return `Hello ${name}`;
    if (!name && timeOfDay) return `Good ${timeOfDay}`;
    if (name && timeOfDay) return `Hello ${name}, Good ${timeOfDay}`;
}
console.log(greetings("", ""))
console.log(greetings("Mike", ""))
console.log(greetings("", "Evening"))
console.log(greetings("Mike", "Evening"))