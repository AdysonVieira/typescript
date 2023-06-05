enum Gender {
  Male, 
  Female,
}

enum Roles {
  Admin,
  NormalUser,
}

type User = {
  name: string
  idade: number
  gender: Gender
  roles: Array<Roles>
  hair?: string
}

const getName = (user: User): [string, number] => {
  return [user.name, user.idade]
}

getName({
  name: 'Adyson',
  idade: 32,
  gender: Gender.Male,
  roles: [Roles.Admin]
})


// Tipos opcionais
const users: Array<User> = [
  {
    name: 'Adyson',
    idade: 32,
    gender: Gender.Male,
    roles: [Roles.Admin]
  },
  {
    name: 'Eduarda',
    idade: 21,
    gender: Gender.Female,
    roles: [Roles.NormalUser],
    hair: 'Preto'
  }
]

// Interface | Podem ser utilizadas para definir um contrato para que outros objetos possam estender do mesmo.

interface User = {
  name: string
  idade: number
  gender: Gender
  roles: Array<Roles>
  hair?: string
}