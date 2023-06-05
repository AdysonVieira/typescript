// Tipo básicos


// String
const nome: string = 'Adyson'
// const nome: string = 25 | erro

// Number
const idade: number = 32

// Boolean
const valor: boolean = true

// Array
const lista: Array<string> = ['Felipe', 'Bruno', 'Fernando']

// Function
const sum = (valor1: number, valor2: number): number => {
  return valor1 + valor2
}

// Enum
enum MetodosDePagamento {
  credito,
  debito,
  transferenciaBancaria,
}
const metodoDePagamento: MetodosDePagamento = 'credito'

// Tuple | quando trabalhamos com listas de tamanhos definidos onde os elementos da mesma podem variar entre vários tipos, podemos utilizar o tuple.
const value: [string, number] = ["Adyson", 25]

const getUsernameAndAge = (user: object): [string, name] => {
  // função
}

// Unknown e Any | Quando não sabemos o tipo específico de uma variável ou aceitamos qualquer tipo, podemos utilizar o unknown
const sobrenome: unknown = 25

const valor: any = metodoDeUmaLibSemTS()


// Void | É usado para definir os valores de saída de uma função que não retorna nada
const setAge = (age: number): void => {
  // função
}
