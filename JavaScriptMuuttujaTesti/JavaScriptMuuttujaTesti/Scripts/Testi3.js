//luokkamääritys TypeScriptillä
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + "" + person.lastName;
}
var user = new Student("Olli", "K.", "Oppilas");
console.log(greeter(user));
//# sourceMappingURL=Testi3.js.map