let promise = new Promise((resolve, reject) => {
    console.log("i am the singer");
    setTimeout(() => resolve("done"), 10000);
});
promise.then((res) => {
    console.log('I am a fan');
});
promise.catch((err) => {
    console.log("fan receives a error", err);
});
let user = "Jane User";
document.body.textContent = greeter(user);
function greeter(person) {
    console.log('HelloWorld');
    return "Hello, " + person;
}
//# sourceMappingURL=helloWorld.js.map