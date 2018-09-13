function makeArr(){
      const arr = []
            for (var i=0; i< 5 ; i++){
              arr.push(function(){console.log(i)})
            }
      console.log(arr)    
      return arr
}

const arr = makeArr()

arr[0]()


