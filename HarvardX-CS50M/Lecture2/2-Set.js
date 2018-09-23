// like log on addition or ceate new methos


class MySet extends Set {
  constructor(arr) {
    super(arr)
    this.originalArray = arr
  }
  add(val){
      super.add(val)
      console.log(`added ${val} to the set!`)
    }
  toArray(){
    return Array.from(this)
  }
  reset(){
    return new MySet(this.originalArray)
  }
}


const x = new MySet(1,2,3)
console.log(x.toArray())
