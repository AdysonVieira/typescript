// tipar elementos do DOM
// O Typescript traz por padrão os tipos customizados necess´rios para lidar com todas as interfaces dos métodos do navegador

const myElement: HTMLElement = document.getElementById("elementId")
// document.getElementById(elementId: string): HTMLElement


// tipos específicos

// div
const myDivElement: HTMLDivElement = document.getElementById("elementId") as HTMLDivElement // type assertion

// li
const myLIElement: HTMLLIElement = document.querySelector("li") as HTMLLIElement

// p
const myParagrapherElement: HTMLParagraphElement = document.querySelector("p") as HTMLParagraphElement



// querySelector e createElement
// Alguns métodos do document não necessitam de type assertion

const LIElement: HTMLLIElement | null = document.querySelector("li")

const a: HTMLParagraphElement = document.createElement("p")