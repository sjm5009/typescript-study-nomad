type Food = string // typescript에게 string 형태를 알려줌
const banana: Food = 'delicious'

// ====================================================================================
/* 
    📌 type & interface
    같은 점: Object의 모양을 결정함
    다른 점: type은 특정값들로 제한이 가능, alias로 타입 설정도 가능
*/
// 특정값을 가지도록 제한해 줄 수 있음
type Team = "red" | 'blue' | 'yellow'
type Health = 0 | 1 | 5 | 10

// type Player = {
//     nickname: string,
//     healthBar: Health,
//     team: Team
// } // typescript에게 obj 형태를 알려줌

// interface: Object의 모양을 결정해서 typescript에게 설명해 주기 위해서만 사용, 1개지 목적
interface Player {
    nickname: string,
    healthBar: Health,
    team: Team
}

export const summer: Player = {
    nickname: 'summer',
    healthBar: 5,
    team: 'blue'
}

// ====================================================================================

/* 방법 1 - interface */
// interface Person {
//     name: string
// }
// interface User extends Person {
// }
// const nana: User = {
//     name: 'Nana'
// }

/* 방법 2 - type */
// type Person = {
//     readonly name: string
// }
// type User = Person & {
// }
// const nana: User = {
//     name: 'Nana'
// }
// nana.name
// nana.name = 'summer'

// ====================================================================================

/* typescript가 interface를 하나로 합쳐줌, interface만 가능 */
interface Person {
    name: string
}
interface Person {
    lastNm: string
}
interface Person {
    health: number
}
const yuri: Person = {
    name: 'yuri',
    lastNm: 'suh',
    health: 20
}
yuri.name