function makeArr(){
      const arr = []
            for (var i=0; i< 5 ; i++){
              arr.push(function(){console.log(i)})
              console.log("this is the arr",arr,"this is the i and arr[i]():",i, ":", arr[0]())
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
