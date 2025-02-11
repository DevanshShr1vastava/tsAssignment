abstract class Payment{
    amount:number;
    date:Date;
    constructor(amount:number,date:Date){
        this.amount = Number(amount);
        this.date = date;
    }

    isAuth?(cred1:number,passkey:number){}

    deposit?(auth:boolean):void{}

    withdraw?(auth:boolean):void{}
}

class CreditCardPayment extends Payment{
    private cardNumber:number;
    private pin:number;
    private balance:number;
    accountHolder : string;
    constructor(amount:number,date:Date,accountHolder:string,cardNumber:number,pin:number,balance:number){
        super(amount,date);
        this.accountHolder = accountHolder;
        this.cardNumber = cardNumber;
        this.pin = pin;
        this.balance = balance;
    }
    isAuth(card:number,pin:number):boolean{
        if(this.cardNumber === card && this.pin === pin) return true;
        else return false;
    }
    deposit(auth:boolean): void {
        if(auth){
            this.balance += this.amount;
            console.log("Deposit Successfull! Current balance : ",this.balance);
        }
        else{
            console.log('invalid credentials');
        }
    }
    withdraw(auth:boolean): void {
        if(auth){
            if(this.amount > this.balance){
                console.log("insufficient balance in account");
            }
            else{
                this.balance -= this.amount;
                console.log("Withdrawal Successfull! Current balance : ",this.balance);
            }
        }
        else{
            console.log('invalid credentials');
        }
    }
}

const creditCard1 = new CreditCardPayment(5500,new Date(),'John Doe',58357987345,5555,5000);
const cardValidity:boolean = creditCard1.isAuth(58357987345,5555);
creditCard1.withdraw(cardValidity)
creditCard1.deposit(cardValidity)
creditCard1.withdraw(cardValidity)

console.log("-----------------------------------");

class PayPalPayment extends Payment {
    private password:string;
    private balance:number;
    userId: string;
    email:string;
    constructor(amount:number,date:Date,userId:string,email:string,password:string,balance:number){
        super(amount,date);
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.balance = balance;
    }
    deposit(): void {
        this.balance += this.amount;
        console.log("Deposit Successfull! Current balance : ",this.balance);
    }
    withdraw(): void {
        if(this.balance < this.amount) console.log('Insufficient Balance');
        else{
            this.balance -= this.amount;
            console.log("Withdrawal Successfull! Current balance : ",this.balance);
        }
    }
}

const pp1 = new PayPalPayment(7600,new Date(), 'johnDoe7','john.doe@mail.com','DopeGuy24',8900);
pp1.withdraw();
pp1.withdraw();
pp1.deposit();

class CryptoPayment extends Payment { 
    private privateKey:string;
    private quantity:number;
    publicKey:string;
    type:string;
    constructor(amount:number,date:Date,privateKey:string,publicKey:string,type:string,quantity:number){
        super(amount,date);
        this.privateKey = privateKey;
        this.publicKey = publicKey;
        this.type = type;
        this.quantity = quantity;
    }
}