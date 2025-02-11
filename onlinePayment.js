var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Payment = /** @class */ (function () {
    function Payment(amount, date) {
        this.amount = Number(amount);
        this.date = date;
    }
    Payment.prototype.isAuth = function (cred1, passkey) { };
    Payment.prototype.deposit = function (auth) { };
    Payment.prototype.withdraw = function (auth) { };
    return Payment;
}());
var CreditCardPayment = /** @class */ (function (_super) {
    __extends(CreditCardPayment, _super);
    function CreditCardPayment(amount, date, accountHolder, cardNumber, pin, balance) {
        var _this = _super.call(this, amount, date) || this;
        _this.accountHolder = accountHolder;
        _this.cardNumber = cardNumber;
        _this.pin = pin;
        _this.balance = balance;
        return _this;
    }
    CreditCardPayment.prototype.isAuth = function (card, pin) {
        if (this.cardNumber === card && this.pin === pin)
            return true;
        else
            return false;
    };
    CreditCardPayment.prototype.deposit = function (auth) {
        if (auth) {
            this.balance += this.amount;
            console.log("Deposit Successfull! Current balance : ", this.balance);
        }
        else {
            console.log('invalid credentials');
        }
    };
    CreditCardPayment.prototype.withdraw = function (auth) {
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
    };
    return CreditCardPayment;
}(Payment));
var creditCard1 = new CreditCardPayment(5500, new Date(), 'John Doe', 58357987345, 5555, 5000);
var cardValidity = creditCard1.isAuth(58357987345, 5555);
creditCard1.withdraw(cardValidity);
creditCard1.deposit(cardValidity);
creditCard1.withdraw(cardValidity);
console.log("-----------------------------------");
var PayPalPayment = /** @class */ (function (_super) {
    __extends(PayPalPayment, _super);
    function PayPalPayment(amount, date, userId, email, password, balance) {
        var _this = _super.call(this, amount, date) || this;
        _this.userId = userId;
        _this.email = email;
        _this.password = password;
        _this.balance = balance;
        return _this;
    }
    PayPalPayment.prototype.deposit = function () {
        this.balance += this.amount;
        console.log("Deposit Successfull! Current balance : ", this.balance);
    };
    PayPalPayment.prototype.withdraw = function () {
        if (this.balance < this.amount)
            console.log('Insufficient Balance');
        else {
            this.balance -= this.amount;
            console.log("Withdrawal Successfull! Current balance : ", this.balance);
        }
    };
    return PayPalPayment;
}(Payment));
var pp1 = new PayPalPayment(7600, new Date(), 'johnDoe7', 'john.doe@mail.com', 'DopeGuy24', 8900);
pp1.withdraw();
pp1.withdraw();
pp1.deposit();
var CryptoPayment = /** @class */ (function (_super) {
    __extends(CryptoPayment, _super);
    function CryptoPayment(amount, date, privateKey, publicKey, type, quantity) {
        var _this = _super.call(this, amount, date) || this;
        _this.privateKey = privateKey;
        _this.publicKey = publicKey;
        _this.type = type;
        _this.quantity = quantity;
        return _this;
    }
    return CryptoPayment;
}(Payment));
