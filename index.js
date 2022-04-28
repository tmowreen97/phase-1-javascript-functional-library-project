function myEach(collection, alert){
  for (let accessor in collection){
    alert(collection[accessor])
  }
  return collection
}

function myMap(collection, callback){
  let newArray = []
  for (let accessor in collection){
    newArray.push(callback(collection[accessor]))
  }
  return newArray
}

function myReduce(collection, callback, acc){
  if (Array.isArray(collection)=== false){
    let copy2 = [...(Object.values(collection))]
    acc = acc || copy2.shift()
    for (let accessor in copy2){
      acc = callback(acc, copy2[accessor], copy2)
    }
    return acc
  }
  else{
    let copy = [...collection]
    acc = acc || copy.shift()
    for (let accessor in copy){
      acc = callback(acc, copy[accessor], copy)
    }
    return acc
  }
}

function myFind(collection, predicate){
  let found = collection.find(predicate)
  return found
}

function myFilter(collection, predicate){
  var newArray
  if (Array.isArray(collection)===false){
    newArray= Object.values(collection)
  }
  else {
    newArray=collection
  }
  let found = newArray.filter(predicate)
  return found
}

function mySize(collection){
  var values
  if (Array.isArray(collection)===false){
    values = Object.values(collection)
  }
  else{
    values = collection
  }
  return values.length
}

function myFirst(array, int=0){
  if (int != 0){
    return array.slice(0,int)
  }
  else {
    return parseInt(array.slice(0,1).join())
  }
}

function myLast(array, int =0){
  if (int!=0){
    return array.slice(array.length-int, array.length)
  }
  else{
    return parseInt(array.slice(array.length-1).join())
  }
}

function myKeys(obj){
  return Object.keys(obj)
}

function myValues(obj){
  return Object.values(obj)

}

// //BONUS
// function mySortBy(array, callback){

//   let newArray = array.sort(callback)
//   return newArray

// }

