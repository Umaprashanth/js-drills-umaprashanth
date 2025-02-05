const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

function keys(obj) {
    let res = []
    for (let key in obj){
        res.push(key)
    }
    return res
  }

// console.log(keys(testObject))//[ 'name', 'age', 'location' ]


function values(obj) {
    let res = []
    for (let key in obj){
        res.push(obj[key])
    }
    return res
  }

// console.log(values(testObject))///[ 'Bruce Wayne', 36, 'Gotham' ]

function mapObject(obj, cb) {
    let newObj = {}
    for (let key in obj){
        newObj[key] = cb(obj[key])
    }
    return newObj
  }

//   console.log(mapObject(testObject, (val) => typeof(val) === "string" ? val.toUpperCase() : val))
// { name: 'BRUCE WAYNE', age: 36, location: 'GOTHAM' }


function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs

    let res = []
    for (let key in obj){
        let list = []
        list.push(key, obj[key])
        res.push(list)
    }
    return res
  }
//   console.log(pairs(testObject));//[ [ 'name', 'Bruce Wayne' ], [ 'age', 36 ], [ 'location', 'Gotham' ] ]

function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
    let res = {}
    for (let key in obj){
        res[obj[key]] = key;
    }
    return res
  }
//   console.log(invert(testObject));//{ '36': 'age', 'Bruce Wayne': 'name', Gotham: 'location' }


function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults
    for (let key in obj){
        if (typeof (obj[key])=== 'undefined'){
            obj[key] = defaultProps[key]
        }
    }
    return obj
  }

//   let a = {name: "up" , number : undefined}
//   let b = {name: "up", number: 1234 }

//   console.log(defaults(a,b))//{ name: 'up', number: 1234 }