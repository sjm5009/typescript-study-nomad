type Words = {
    // Words 타입이 string 만을 property로 가지는 obj라는 뜻, 제한된 타입으로 설정
    [whatever: string]: string
}

// example
let example: Words = {
    'potato': 'food'
}

export class Dict {
    // 1. 멤버변수 선언 후
    private words: Words
    // 2. 생성자로 수동 초기화한다
    constructor(){
        this.words = {}
    }
    add(word: Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def
        }
    }
    def(term: string){
        return this.words[term]
    }
}

// 1. class를 type처럼 사용할 수 있음
// 2. or class 본연의 쓰임대로 사용
class Word {
    constructor(
        public term: string,
        public def: string
    ){}
}

const typescript = new Word('typescript', 'javaScript with syntax for types')
const dict = new Dict()
dict.add(typescript)
dict.def('typescript')