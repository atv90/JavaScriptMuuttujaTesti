//luokkamääritys TypeScriptillä
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    }
}
interface IPerson {
    firstName: string;
    lastName: string;
}
function greeter(person: IPerson) {
    return "Hello, " + person.firstName + "" + person.lastName;
}
var user = new Student("Olli", "K.", "Oppilas");
console.log(greeter(user));