// type BusClass = {
//   emit: (name: string) => void,
//   on:(name:string, callback: Function) => void
// }

interface BusClass{
  emit: (name: string) => void,
  on:(name:string, callback: Function) => void
}

type ParamsKey = string | number | symbol

interface List{
  [key: ParamsKey]: Array<Function>
}

class Bus implements BusClass {
  list: List
  constructor() {
    this.list = {}
  }
  emit(name: string, ...args: Array<any>) {
    let eventName: Array<Function> = this.list[name]
    eventName.forEach((fn: Function) => {
      fn.apply(this, args)
    })
  }
  on(name: string, callback: Function) {
    let fn: Array<Function> = this.list[name] || []
    fn.push(callback)
    this.list[name] = fn
  }
}

export default new Bus()