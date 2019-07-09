class Animal {
  constructor(age = 0) {
    this.type = "animal world";
    this.gander = "male";
    this.age = age;
    this.constructor.criticalAge(age);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }

  static criticalAge(age) {
    age > 20 && alert("Critical age");
  }
}

class Dog extends Animal {
  constructor(a, name) {
    super(a);
    this.name = name;
  }
  get name() {
    return (this._name = name);
  }
  set name(name) {
    this._name = name;
  }
}

class Parrot extends Animal {
  constructor(a, name) {
    super(a);
    this.nama = name;
  }
  get name() {
    return (this._name = name);
  }
  set name(name) {
    this._name = name;
  }
}

class Cat extends Animal {
  constructor(a, name) {
    super(a);
    this.name = name;
  }
  get name() {
    return (this._name = name);
  }
  set name(name) {
    this._name = name;
  }
}

let dog1 = new Dog(21, "Rex");
