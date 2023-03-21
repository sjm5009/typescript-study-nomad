/* Type & Interface */

type PlayerA = {
    name: string
}
type PlayerAA = PlayerA & {
    age: number
}
export const playerA: PlayerAA = {
    name: 'summer',
    age: 31
}

// ====================================================================================

interface PlayerB {
    name: string
}
interface PlayerBB extends PlayerB {
    age: number
}
export const playerB: PlayerBB = {
    name: 'summer',
    age: 31
}

// ====================================================================================

type PlayerC = {
    firstName: string
}
interface PlayerD {
    firstName: string
}
// type & interface 둘다 구현 가능
class User implements /* PlayerC */ PlayerD {
    constructor(
        public firstName: string
    ){}
}