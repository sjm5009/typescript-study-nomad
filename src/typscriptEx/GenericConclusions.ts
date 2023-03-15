export const superPrint = <T,M>(arr: T[], b: M) => {
    return arr[0]
}

const a = superPrint([1,2,3], 'a')
const b = superPrint([true, false, true], 1)
const c = superPrint(['a', 'b', 'c'], true)
const d = superPrint([1, 'b', true], 'a')

// ==================================================================================================

type Player<T> = {
    name: string,
    extraInfo: T
}
type SummerExtra = {
    favFood: string
}

// type SummerPlayer = Player<{favFood: String}>
type SummerPlayer = Player<SummerExtra>

const summer: SummerPlayer = {
    name: 'summer',
    extraInfo: {
        favFood: 'Pizza'
    }
}

const nana: Player<null> = {
    name: 'nana',
    extraInfo: null
}

// ==================================================================================================

type A = Array<number>
let numArr: A = [1, 2, 3, 4]

function printAllNumers(arr: Array<number>) {

}
// ==================================================================================================

/* React 사용시 */
// useState<number>()

// ==================================================================================================