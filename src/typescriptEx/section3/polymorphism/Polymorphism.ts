export type SuperPrint = {
    <T>(arr: T[]): T
    // (arr: number[]): void
    // (arr: boolean[]): void
    // (arr: string[]): void
    // (arr: (number|string|boolean)[]): void

}

const superPrint: SuperPrint = (arr) => arr[0]

const a = superPrint([1,2,3])
const b = superPrint([true, false, true])
const c = superPrint(['a', 'b', 'c'])
const d = superPrint([1, 'b', true])