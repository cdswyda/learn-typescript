abstract class Animal {}

class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
  name: string;
}
