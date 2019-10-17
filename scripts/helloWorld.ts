
import {Observable} from 'rxjs';
export class helloWorld{
    constructor(){
        let user = "Jane User";
        document.body.textContent = this.greeter(user);

    }

    observable = new Observable(subscriber =>{
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
            subscriber.next(4);
            subscriber.complete();
        }, 1000);
    });
    callObservable() : void{
        console.log("just before subscribe")
        this.observable.subscribe({
            next(x) {console.log('got value ' + x);},
            error(err) { console.error('Something wrong occurred' + err);},
            complete() {console.log('done');}
        });
    }

    promise = new Promise((resolve,reject) => {
        console.log("i am the singer");

        setTimeout(() => resolve("done"), 10000);
    });

    callPromise(){
        this.promise.then((res) =>{
            console.log('I am a fan');
        });

        this.promise.catch((err) => {
            console.log("fan receives a error", err);
        });
    }

   

    greeter(person : any){
        console.log('HelloWorld');
        return "Hello, " + person;

    }

}
