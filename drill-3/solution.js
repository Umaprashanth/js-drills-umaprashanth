import inventory from "./cars.js";
// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. 
// Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car.
// Then log the car's year, make, and model in the console log in the format of:
// ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");

function carInfo(data,id){

    if (!Array.isArray(data)|| data.length==0){
        return false
    }
   if (id>data.length || id <=0 ){
    return false
   } 
        return data[id-1]  
}

// // ==== Problem #2 ====
// // The dealer needs the information on the last car in their inventory. 
// Execute a function to find what the make and model of the last car in the inventory is?  
// Log the make and model into the console in the format of:
// ("Last car is a *car make goes here* *car model goes here*");


function lastCarInfo(data){
    if(!Array.isArray(data) || data.length == 0){
        console.log("Provide valid input")
        return
    }
    let car = data[data.length-1]
    console.log(`Last car is a ${car.car_make} ${car.car_model}`)
}

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. 
// Execute a function to Sort all the car model names into alphabetical order and 
// log the results in the console as it was returned.

function sortingCarModels(data){

    if (!Array.isArray(data)|| data.length ==0){
        return "Invalid input" 
    }

    let arr = []
    for (var i = 0; i<data.length;i++){
        if (data[i]["car_model"]){
        arr.push(data[i]["car_model"])
    }
}
    arr.sort();
    return arr
}


// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. 
// Execute a function that will return an array from the dealer data containing only the car 
// years and log the result in the console as it was returned.

function yearsOfEveryCars(data){

    if(!data || !Array.isArray(data) || data.length == 0){
        return "input a valid data"
    }

    let arr = []
    for (var i = 0; i<data.length; i++){
        if (data[i]["car_year"]){
        arr.push(data[i]["car_year"])
    }
}
    return arr
}


// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. 
// Using the array you just obtained from the previous problem, 
// find out how many cars were made before the year 2000 and return the array of older cars and log its length.


function oldCars2000(data){

    if(!data || !Array.isArray(data) || data.length == 0){
        return "input a valid data"
    }

    let car = yearsOfEveryCars(data)
    let newArr = []

    for (var i = 0; i<car.length; i++){
        if (car[i]<2000){
            newArr.push(car[i])
        }
    }
    return newArr
}



// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  
// Execute a function and return an array that only contains BMW and Audi cars.  
// Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.


function BMWAndAudiCars(data){

    if(!data || !Array.isArray(data) || data.length == 0){
        return "input a valid data"
    }

    let BMWAndAudi = []
    for (var i = 0; i<data.length; i++){

        if(data[i]["car_make"]){
        if (data[i]["car_make"] == "BMW" || data[i]["car_make"] == "Audi"){
            BMWAndAudi.push(data[i])
        }
        
    }
    }
    return JSON.stringify(BMWAndAudi,null,2)

}

export{
    carInfo,
    lastCarInfo,
    sortingCarModels,
    yearsOfEveryCars,
    oldCars2000,
    BMWAndAudiCars
}