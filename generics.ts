// Generics
// Tem a capacidade de melhorar a forma como definimos tipos.

const names: Array<string> = ["Adyson", "Eduarda"]

type User = {
  name: string;
  age: number;
}

const users: Array<User> = [
  {
    name: "Adyson", 
    age: 30
  },
  {
    name: "Eduarda",
    age: 22
  }
]

// Para evitar duplicação do tipo Page
type PageUser = {
  list: Array<User>;
  totalPages: number;
  currentPages: number;
  itemsPerPage: number;
  totalItems: number;
}

type PageCar = {
  list: Array<Car>;
  totalPages: number;
  currentPages: number;
  itemsPerPage: number;
  totalItems: number;
}

// Faça isso
type Page<T> {
  list: Array<T>;
  totalPages: number;
  currentPages: number;
  itemsPerPage: number;
  totalItems: number;
};

const userPage: Page<User> = getUsers({ page: 1 });
const carPage: Page<Car> = getCars({ page: 2 });


