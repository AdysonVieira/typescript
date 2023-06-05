// Heranças
// Podemos utilizar do poder da herança para nos ajudar a organizar o nosso código.

class Car {
  totalSpeedy: number
  speedy: number
  private gears: number
  
  constructor(totalSpeedy: number, speedy: number, gears: number) {
    this.totalSpeedy = totalSpeedy;
    this.speedy = speedy;
    this.gears = gears
  }
  
  accelerate(): void {
    if (this.speedy >= this.totalSpeedy) {
      this.speedy += this.totalSpeedy / this.gears
    }
  }
}

class ModelA extends Car {
  constructor() {
    super(150, 0, 5)
  }
}

class ModelB extends Car {
  private sportMode: boolean = false
  constructor() {
    super(150, 0, 6)
  }

  toggleSportMode() {
    this.sportMode = !this.sportMode
    this.totalSpeedy += this.sportMode ? 50 : -50
  }
}

const A: ModelA = new ModelA()
const B: ModelB = new ModelB()

const cars: Array<Car> = [A, B]

