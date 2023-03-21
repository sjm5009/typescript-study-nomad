interface SStorage<T> {
    [key:string]: T
}
export class LocalStorage<T> {
    private storage: SStorage<T> = {}
    get(key:string): T {
        return this.storage[key]
    }
    set(key: string, value: T){
        this.storage[key] = value
    }
    remove(key:string){
        delete this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

const stringStorage = new LocalStorage<string>()
stringStorage.set('name', 'summer')
stringStorage.get('name')

const booleanStorage = new LocalStorage<boolean>()
booleanStorage.set("key", true)
booleanStorage.get('key')