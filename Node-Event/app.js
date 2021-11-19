const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (n1, n2) => {console.log(n1 + n2)});
eventEmitter.emit('tutorial', 2, 5);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person("Pedro");
pedro.on('name', () =>{console.log('My name is ' + pedro.name);});

pedro.emit('name')