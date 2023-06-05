// Interfaces
// Definem a estrutura de um objeto, mas não podemos criar instâncias.

interface Car {
  parts: Array<string>
  assembly(): any
}

class CarModelA implements Car {
  parts: string[] = ['engine1.0', 'manual_transmission']

  assembly() {
    const car = this.parts.join('.')
  }
}

class CarModelB implements Car {
  parts: string[] = ['engine2.0', 'automatic_transmission']

  assembly() {
    const car = this.parts.join(',')
  }
}

const modelA: CarModelA = new CarModelA()
const modelB: CarModelB = new CarModelB()

function factory(cars: Array<Car>) {
  cars.forEach((car) => car.assembly())
}

factory([modelA, modelB])
