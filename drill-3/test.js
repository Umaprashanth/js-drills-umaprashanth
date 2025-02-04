import inventory from "./cars.js"; 
import {carInfo,lastCarInfo,sortingCarModels,yearsOfEveryCars,oldCars2000,BMWAndAudiCars} from "./solution.js"

// var id = 53
// var id = 1

// let car = carInfo(inventory,id);
//     if (car == false){
//         console.log("Id is out of range")
//     } else{
// console.log(`Car ${id} is a ${car.car_year} ${car.car_make} ${car.car_model}`) 
//     }

// Car 1 is a 2009 Lincoln Navigator

// var id = 1
// var newData = "hello"

// let car = carInfo(newData,id);
//     if (car == false){
//         console.log("Id is out of range")
//     } else{
// console.log(`Car ${id} is a ${car.car_year} ${car.car_make} ${car.car_model}`) 
//     }

// Id is out of range

//  var newData = "hello"
// lastCarInfo(inventory);//Last car is a Lincoln Town Car
// lastCarInfo(newData);//Provide valid input
// lastCarInfo();//Provide valid input

// console.log(sortingCarModels(inventory));
// console.log(sortingCarModels());//Invalid input
// console.log(sortingCarModels("hello"));//Invalid input

// console.log(yearsOfEveryCars(inventory));
// [
// 2009, 2001, 2010, 1983, 1990, 1995,
// 2009, 1987, 1996, 2000, 2004, 2004,
// 1997, 1999, 2000, 2001, 1987, 1995,
// 1994, 1985, 2003, 1997, 1992, 2003,
// 2005, 2005, 2000, 2005, 1993, 2010,
// 1964, 1999, 2011, 1991, 2000, 2003,
// 1997, 1992, 1998, 2012, 1965, 1996,
// 2009, 2012, 2008, 1995, 2007, 2008,
// 1996, 1999
// ]
// console.log(yearsOfEveryCars());//"input a valid data"
// console.log(yearsOfEveryCars("hello"));//"input a valid data"

// console.log(oldCars2000(inventory));
// console.log(oldCars2000(inventory).length)
// [
//     1983, 1990, 1995, 1987, 1996,
//     1997, 1999, 1987, 1995, 1994,
//     1985, 1997, 1992, 1993, 1964,
//     1999, 1991, 1997, 1992, 1998,
//     1965, 1996, 1995, 1996, 1999
//   ]
//   25
  
//   console.log(oldCars2000());// input a valid data
// console.log(oldCars2000());// input a valid data

// console.log(BMWAndAudiCars(inventory))
// [
//     {
//       "id": 6,
//       "car_make": "Audi",
//       "car_model": "riolet",
//       "car_year": 1995
//     },
//     {
//       "id": 8,
//       "car_make": "Audi",
//       "car_model": "4000CS Quattro",
//       "car_year": 1987
//     },
//     {
//       "id": 25,
//       "car_make": "BMW",
//       "car_model": "525",
//       "car_year": 2005
//     },
//     {
//       "id": 30,
//       "car_make": "BMW",
//       "car_model": "6 Series",
//       "car_year": 2010
//     },
//     {
//       "id": 44,
//       "car_make": "Audi",
//       "car_model": "Q7",
//       "car_year": 2012
//     },
//     {
//       "id": 45,
//       "car_make": "Audi",
//       "car_model": "TT",
//       "car_year": 2008
//     }
//   ]

// console.log(BMWAndAudiCars());//input a valid data
// console.log(BMWAndAudiCars("hello"));//input a valid data
  