"use strict";
class Payment {
    constructor(amount, date) {
        this.amount = Number(amount);
        this.date = date;
    }
    isAuth(cred1, passkey) { }
    deposit(auth) { }
    withdraw(auth) { }
}
class CreditCardPayment extends Payment {
    constructor(amount, date, accountHolder, cardNumber, pin, balance) {
        super(amount, date);
        this.accountHolder = accountHolder;
        this.cardNumber = cardNumber;
        this.pin = pin;
        this.balance = balance;
    }
    isAuth(card, pin) {
        if (this.cardNumber === card && this.pin === pin)
            return true;
        else
            return false;
    }
    deposit(auth) {
        if (auth) {
            this.balance += this.amount;
            console.log("Deposit Successfull! Current balance : ", this.balance);
        }
        else {
            console.log('invalid credentials');
        }
    }
    withdraw(auth) {
        if (auth) {
            if (this.amount > this.balance) {
                console.log("insufficient balance in account");
            }
            else {
                this.balance -= this.amount;
                console.log("Withdrawal Successfull! Current balance : ", this.balance);
            }
        }
        else {
            console.log('invalid credentials');
        }
    }
}
const creditCard1 = new CreditCardPayment(5500, new Date(), 'John Doe', 58357987345, 5555, 5000);
const cardValidity = creditCard1.isAuth(58357987345, 5555);
creditCard1.withdraw(cardValidity);
creditCard1.deposit(cardValidity);
creditCard1.withdraw(cardValidity);
console.log("-----------------------------------");
class PayPalPayment extends Payment {
    constructor(amount, date, userId, email, password, balance) {
        super(amount, date);
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.balance = balance;
    }
    deposit() {
        this.balance += this.amount;
        console.log("Deposit Successfull! Current balance : ", this.balance);
    }
    withdraw() {
        if (this.balance < this.amount)
            console.log('Insufficient Balance');
        else {
            this.balance -= this.amount;
            console.log("Withdrawal Successfull! Current balance : ", this.balance);
        }
    }
}
const pp1 = new PayPalPayment(7600, new Date(), 'johnDoe7', 'john.doe@mail.com', 'DopeGuy24', 8900);
pp1.withdraw();
pp1.withdraw();
pp1.deposit();
class CryptoPayment extends Payment {
    constructor(amount, date, privateKey, publicKey, type, quantity) {
        super(amount, date);
        this.privateKey = privateKey;
        this.publicKey = publicKey;
        this.type = type;
        this.quantity = quantity;
    }
}
