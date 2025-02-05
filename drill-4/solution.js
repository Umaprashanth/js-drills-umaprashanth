const items = [1, 2, 3, 4, 5, 5]; 

function each(elements, cb) {   
    for (let i = 0; i < elements.length; i++) {
      cb(elements[i], i);    
    }
}

// // each(items, (num,index)=>{
// //     console.log( num*num)
// // }) // 1 4 9 16 25 25


function map(elements, cb){
    let res = []
    for (let i = 0; i<elements.length; i++){
        res.push(cb(elements[i]))   
    }
    return res
}

// console.log(map(items, (num) => num*5)) //[ 5, 10, 15, 20, 25, 25 ]

function customReduce(elements, cb, startingValue) {

    let acc;
    let startIndex;

    if (startingValue === undefined){
        acc = elements[0];
        startIndex = 1;
    } else {
        acc = startingValue;
        startIndex = 0;
    }
        for (let i = startIndex; i<elements.length; i++){
            acc = cb(acc, elements[i])
        }
        return acc; 
    }
    
// console.log(customReduce(items,(startingValue,num)=> startingValue+num,0))//20
// console.log(customReduce(items,(startingValue,num)=> startingValue*num,1))//600


function find(elements,cb){

    for (let i = 0; i<elements.length ; i++){
        if (cb(elements[i])){
            return elements[i]
        }
    }
    return undefined
}

// console.log(find(items, (num)=> num>4))//5
// console.log(find(items, (num)=> num>10))//undefined


function filter(elements, cb) {

    let res = []
    for (let i = 0; i<elements.length; i++){
        if (cb(elements[i])){
            res.push(elements[i])
        }
    }
    return res
  }

// console.log(filter(items,(num)=> num>2))//[ 3, 4, 5, 5 ]
// console.log(filter(items,(num)=> num>10))//[]


function flatten(elements) {
    let res = []
    for (let i = 0; i<elements.length; i++){
        if (Array.isArray(elements[i])){
           res.push(...flatten(elements[i]) )
        } else{
            res.push(elements[i])
        }
    }
    return res
  }

  const nestedArray = [1, [[2], [[3]]], [[[4]]]];

//   console.log(flatten(nestedArray));//[ 1, 2, 3, 4 ]