class Person {
  constructor() {
    (this.name = "azhar"), (this.love = "Amna");
    this.color = "yellow";
  }

  printMyName() {
    console.log(this.name, "only Loves ", this.love);
  }
}
const person = new Person();
person.printMyName();
