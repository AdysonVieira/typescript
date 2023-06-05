// Classes
// Uma classe representa um template que podemos utilizar para criar tipos específicos de objetos.

class Dog {
  name: string = ''
  weight: number = 0
  color: string = ''
  size: number = 0

  constructor (
    name: string,
    weight: number,
    color: string,
    size: number,
  ) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.size = size;
  }
}

const dog: Dog = new Dog('Sunguelo', 2, 'preto', 1)

// Sempre que definirmos uma classe o Typescript cria também um tipo correspondente a ela

// Métodos
class Dog2 {
  name: string = ''
  weight: number = 0
  color: string = ''
  size: number = 0

  constructor (
    name: string,
    weight: number,
    color: string,
    size: number,
  ) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.size = size;
  }

  bark(): void {
    console.log(`au-au`)
  }

  hear(noise: string):void {
    if (noise === this.name) {
      this.bark()
    }
  }
  calculateCut(): number {
    return (this.size * this.weight) / 100
  }
}

const pop: Dog2 = new Dog2('Pop', 2, 'preto', 1)
const sunguelo: Dog2 = new Dog2('Sunguelo', 2, 'preto', 1)

sunguelo.hear('Sunguelo')
sunguelo.calculateCut()



// Visibilidade

class Doguinho {
  name: string = '';
  private energy: number = 100;
  
  constructor(name: string) {
    this.name = name
  }

  private isLowEnergy(): boolean {
    return this.energy <= 30;
  }

  private isFull(): boolean {
    return this.energy >= 100;
  }

  bark(): void | undefined {
    if (this.energy < 30) {
      return
    }
    console.log('au-au')
    this.energy -= 10
  }

  hear(noise: string): void {
    if (noise === this.name) {
      this.bark();
    }
  }

  eat(food: Food): void | undefined {
    if (this.isFull()) {
      return
    }
    this.energy += food.energy
  }

  sleep(time: number): void {
    if (this.isLowEnergy()) {
      this.energy += time;
    }
  }
}

class Food {
  name: string = '';
  energy: number = 0;

  constructor(name: string, energy: number) {
    this.name = name;
    this.energy = energy;
  }
}

const melissa: Doguinho = new Doguinho('Melissa')

const meat: Food = new Food('Meat', 50)
const carrot: Food = new Food('Carrot', 5)

melissa.bark() // energy: 90
melissa.bark() // energy: 80
melissa.bark() // energy: 70
melissa.eat(carrot) // energy: 75
melissa.eat(carrot) // energy: 80
melissa.sleep(10) // energy: 90

