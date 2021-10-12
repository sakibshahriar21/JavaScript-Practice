// Sub class
// Inheritance

class Person { //parent class / base class
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    greeting(){
        return `Hello ${this.fname} ${this.lname}!`;
    }
}

class Customer extends Person { //child class / sub class
    constructor(fname , lname, phone, memberShip) {
        super(fname, lname);
        this.phone = phone;
        this.memberShip = memberShip;
    }

    fullName(){
        console.log(this.fname, this.lname);
    }
}

let person1 = new Person("Md. Sakib","Shahriar");
console.log(person1);
console.log(person1.greeting());

let customer_1 = new Customer("Sakib","Shahriar","01680000000","5500");
console.log(customer_1);
console.log(customer_1.greeting());
console.log(customer_1.fullName());


