// animal shelter

// dogs, cats 
// users can choose a dog or a cat or the oldest of either 

// enqueue 
// dequeueAny 
// dequeueDog 
// dequeueCat

// animal object w/ dog or cat variable 
// no limit to animal shelter 

// step 1) create class
// step 2) in constructor create queues for dogs and cats

// enqueue 
  // 1) check the type 
  // 2) insert animal into appropriate queue 

// dequeueAny 
  // 1) determine which is older 
  // 2) call dequeueDog or cat 

// dequeueDog/Cat
  // 1) remove from it's list 
  // 2) return it

// let dogs = []
// let cats = []

class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
  }

  enqueue(animal) {
    animal.entryTime = new Date();
    if (animal.type === 'dog') {
      this.dogQueue.push(animal);
    } else if (animal.type === 'cat') {
      this.catQueue.push(animal);
    } else {
      new Error('cant put that here!')
    }
  }

  dequeueAny() {
    if (this.dogQueue[0].entryTime < this.catQueue[0].entryTime) {
      return this.dequeueDog();      
    } else {
      return this.dequeueCat();
    }
  }

  dequeueCat() {
    let kitty = this.catQueue.shift();
    return kitty;
  }

  dequeueDog() {
    let dog = this.dogQueue.shift();
    return dog;
  }
}

class Animal {
  constructor(name, type, entryTime) {
    this.name = name;
    this.type = type;
    this.entryTime = entryTime;
  }
}

// class Dog extends Animal {
  
// }