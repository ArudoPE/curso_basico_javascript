//MiniChallenge: Let's make it interesting!
function platziStudent(sName, sAge, sCountry) {
    this.sName = sName;
    this.sAge = sAge;
    this.sCountry = sCountry;
    this.studentConfirmation = function() {
        alert(`Welcome ${this.sName}, your age is ${this.sAge} and your country is ${this.sCountry}.`);
    }
}
var platziStudents = [];
var question = prompt("Do you want to add a new student? (Y/N)");
while(question === "Y"){
    let index = 0;
    let name = prompt("Enter the name:");
    let age = prompt("Enter age:");
    let country = prompt("Enter country:");
    platziStudents[index] = new platziStudent(name, age, country);
    platziStudents[index].studentConfirmation();
    index++;
    question = prompt("Do you want to add a new student? (Y/N)");
}