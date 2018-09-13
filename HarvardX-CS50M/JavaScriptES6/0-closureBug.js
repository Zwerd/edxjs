function makeArr(){
      const arr = []
            for (var i=0; i< 5 ; i++){
              console.log(i)
              
              arr.push(function(){console.log(i)})
              console.log(arr,arr[i]())
            }
      console.log(arr)    
      return arr
}

const arr = makeArr()

arr[0]()
arr[1]()
arr[2]()
arr[3]()
arr[4]()
