"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class helloWorld {
    constructor() {
        this.observable = new rxjs_1.Observable(subscriber => {
            subscriber.next(1);
            subscriber.next(2);
            subscriber.next(3);
            setTimeout(() => {
                subscriber.next(4);
                subscriber.complete();
            }, 1000);
        });
        this.promise = new Promise((resolve, reject) => {
            console.log("i am the singer");
            setTimeout(() => resolve("done"), 10000);
        });
        let user = "Jane User";
        document.body.textContent = this.greeter(user);
    }
    callObservable() {
        console.log("just before subscribe");
        this.observable.subscribe({
            next(x) { console.log('got value ' + x); },
            error(err) { console.error('Something wrong occurred' + err); },
            complete() { console.log('done'); }
        });
    }
    callPromise() {
        this.promise.then((res) => {
            console.log('I am a fan');
        });
        this.promise.catch((err) => {
            console.log("fan receives a error", err);
        });
    }
    greeter(person) {
        console.log('HelloWorld');
        return "Hello, " + person;
    }
}
exports.helloWorld = helloWorld;
//# sourceMappingURL=helloWorld.js.map