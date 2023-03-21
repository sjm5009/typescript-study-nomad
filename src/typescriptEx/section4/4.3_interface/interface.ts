// export abstract class Person {
//     constructor(
//         /* private */ protected firstName: string,
//         /* private */ protected lastName: string
//     ){}
//     abstract sayHi(name: string): string
//     abstract fullName(): string
// }
// // const person = new Person() => 사용 불가

// class Player extends Person {
//     fullName(): string {
//         return `${this.firstName} ${this.lastName}`
//     }
//     sayHi(name: string): string{
//         return `Hello ${name}. This is ${this.fullName()}`
//     }
// }

// const summer = new Player('summer', 'suh');
// console.log(summer.fullName())
// console.log(summer.sayHi('nana'))

// interface js로 컴파일 돼지 않음
interface Person {
    firstName: string,
    lastName: string,
    fullName(): string,
    sayHi(name: string): string
}

interface Human {
    health: number
}

export class Player implements Person, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ){}

    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string): string {
        return `Hello ${name}. This is ${this.fullName()}`
    }
}

const makeUser = (user: Person): string => {
    return `hi`
}
makeUser({
    firstName: 'summer',
    lastName: 'suh',
    fullName: () => ``,
    sayHi: (name) => ``
})