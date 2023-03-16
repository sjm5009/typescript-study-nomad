export type SuperPrint = <T,M>(arr: T[], b: M) => T

const superPrint: SuperPrint = (arr) => arr[0]

const a = superPrint([1,2,3], 'a')
const b = superPrint([true, false, true], 1)
const c = superPrint(['a', 'b', 'c'], true)
const d = superPrint([1, 'b', true], 'a')

// Generic을 사용하면 우리가 넣어준 매개변수에 따라 알아서 타입을 잡아줌