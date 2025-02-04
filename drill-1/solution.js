import arrayOfObjects from "./dataSet.js";
// const arrayOfObjects = inputData.arrayOfObjects;

//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
 function emails(data) {
  let result = [];
  if (!data){
    return "Please Provide the Data"
  }

  for (var i = 0; i < data.length; i++) {
    if (!data[i].email){
        continue
      }
    result.push(data[i].email);
  }
  if (result){
    return result
  } else {
    return "emails not found"
  }
}

//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
 function hobbiesAtSpecificAge(data) {
    if (!data){
        console.log("Please Provide the Data")
        return
      }

      for (let obj of data){
        if (
            typeof obj === "object" && "age" in obj && "hobbies" in obj
        ){
            if (obj.age == 30){
                console.log(obj.hobbies)
            }
        }
      }
}

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
 function checksOfStudentAndPlace(data) {
    if (!data){
        return "Please provide the data"
    }
  for (var i = 0; i < data.length; i++) {
    if (data[i].isStudent && data[i].country){
        if (data[i].isStudent && data[i].country == "Australia") {
        console.log(data[i].name);
        }
    }
  }
}

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
 function individualIdentity(data) {
    if (!data){
        console.log("Please provide the data")
        return "Please provide the data"
    }
    if (data.length<3){
        console.log("data is less then 3");
        return
    }
  console.log(data[2].name, data[2].city);
}

//    Implement a loop to access and print the ages of all individuals in the dataset.

 function agesOfAll(data) {
    if (!data){
        console.log("Please provide the data")
        return
    }
  for (var i = 0; i < data.length; i++) {
    if (!data[i].age){
        continue
    }
    console.log(data[i].age);
  }
}

//    Create a function to retrieve and display the first hobby of each individual in the dataset.

 function firstHobby(data) {
    if (!data){
        console.log("Please provide the data")
        return
    }
  for (var i = 0; i < data.length; i++) {
    if(!data[i].hobbies){
        continue
    }
    console.log(data[i].hobbies[0]);
  }
}

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
 function detailsOfPersonAge25(data) {
    if (!data){
        console.log("Please provide the data")
        return
    }
  for (var i = 0; i < data.length; i++) {
    if (!data[i].age){
        continue
    }
    if (data[i].age == 25) {
        if (!data[i].email){
            continue
        }
      console.log(data[i].name, data[i].email);
    }
  }
}

//    Implement a loop to access and log the city and country of each individual in the dataset.

 function countryAndCity(data) {
    if (!data){
        console.log("Please provide the data")
        return
    }
  for (var i = 0; i < data.length; i++) {
    if (!data[i].city || !data[i].country){
        continue
    }
    console.log(data[i].city, data[i].country);
  }
}

export  {emails,
    hobbiesAtSpecificAge,
    checksOfStudentAndPlace,
    individualIdentity,
    agesOfAll,
    firstHobby,
    detailsOfPersonAge25,
    countryAndCity

}