/* 기본적으로 접근제어자를 붙여주지 않으면 public 이다 */

export class User {
    constructor(
        private firstNm: string,
        private lastNm: string,
        public nickNm: string
    ){}
    /* private */ getFullName(){
        return `${this.firstNm} ${this.lastNm}`
    }
}
const summer = new User('summer', 'suh', 'Summer')
summer.nickNm

class Player extends User {

}
const nana = new Player('nana', 'kim', 'Nana')
nana.nickNm
nana.getFullName()

// ====================================================================================

abstract class AbUser {
    constructor(
        private firstNm: string,
        private lastNm: string,
        protected nickNm: string
    ){}
    abstract getNickName(): string
}

class AbPlayer extends AbUser {
    getNickName(): string {
        return this.nickNm
    }
}

const abSummer = new AbPlayer('jm', 'suh', 'Summer')
abSummer.getNickName()