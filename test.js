import users from "./users.js";

// // Q1 Find all users who are interested in playing video games.

// function usersInterestedInVideoGames(data) {
//   var usersList = [];
//   if (!data){
//     // console.log("Please provide the data")
//     return "Please provide the data"
//     }

  for (let obj in data) {
    if (
        typeof data[obj] === "object" && data[obj].interests && Array.isArray(data[obj].interests)
    ){
    if (data[obj]["interests"][0].includes("Video Games")) {
      usersList.push(obj);
    }
  }
}
  return usersList;
}

// // Q2 Find all users staying in Germany.

// function usersInGermany(data) {

//     if (!data){
//         return "Please provide the data"
//         }
//   let usersList = [];

//   for (let obj in data) {
//     if (
//         typeof data[obj] === "object" && data[obj].nationality
//     ){
//     if (data[obj]["nationality"].includes("Germany")) {
//       usersList.push(obj);
//     }
//   }
// }
//   return usersList;
// }

// // Q3 Find all users with masters Degree.

// function usersWithMasters(data) {
//     if (!data){
//         return "Please provide the data"
//         }
//   let usersList = [];

//   for (let obj in data) {
//     if (
//         typeof data[obj] === "object" && data[obj].qualification
//     ){
//     if (data[obj]["qualification"].includes("Masters")) {
//       usersList.push(obj);
//     }
// }
//   }
//   return usersList;
// }

// // Q4 Group users based on their Programming language mentioned in their designation.

// function designationBasedOnLanguage(data) {
//     if (!data){

//         return "Please provide the data"
//         }
//   const language = { python: [], javascript: [], golang: [] };

//   for (let obj in data) {
//     if (typeof data[obj] === "object" && data[obj].designation){
//     for (let lang in language) {
//       if (data[obj].designation.toLowerCase().includes(lang)) {
//         language[lang].push(obj);
//       }
//     }
//     }
//   }
//   return language;
// }

// export {
//     usersInterestedInVideoGames,
//     usersInGermany,
//     usersWithMasters,
//     designationBasedOnLanguage

// }


// import users from "./users.js";

// // Q1 Find all users who are interested in playing video games.

// function usersInterestedInVideoGames(data) {
//   var usersList = [];
//   if (!data){
//     // console.log("Please provide the data")
//     return "Please provide the data"
//     }

//   for (let obj in data) {
//     if (
//         typeof data[obj] === "object" && data[obj].interests && Array.isArray(data[obj].interests)
//     ){
//     if (data[obj]["interests"][0].includes("Video Games")) {
//       usersList.push(obj);
//     }
//   }
// }
//   return usersList;
// }

// // Q2 Find all users staying in Germany.

// function usersInGermany(data) {

//     if (!data){
//         return "Please provide the data"
//         }
//   let usersList = [];

//   for (let obj in data) {
//     if (
//         typeof data[obj] === "object" && data[obj].nationality
//     ){
//     if (data[obj]["nationality"].includes("Germany")) {
//       usersList.push(obj);
//     }
//   }
// }
//   return usersList;
// }

// // Q3 Find all users with masters Degree.

// function usersWithMasters(data) {
//     if (!data){
//         return "Please provide the data"
//         }
//   let usersList = [];

//   for (let obj in data) {
//     if (
//         typeof data[obj] === "object" && data[obj].qualification
//     ){
//     if (data[obj]["qualification"].includes("Masters")) {
//       usersList.push(obj);
//     }
// }
//   }
//   return usersList;
// }

// // Q4 Group users based on their Programming language mentioned in their designation.

// function designationBasedOnLanguage(data) {
//     if (!data){

//         return "Please provide the data"
//         }
//   const language = { python: [], javascript: [], golang: [] };

//   for (let obj in data) {
//     if (typeof data[obj] === "object" && data[obj].designation){
//     for (let lang in language) {
//       if (data[obj].designation.toLowerCase().includes(lang)) {
//         language[lang].push(obj);
//       }
//     }
//     }
//   }
//   return language;
// }

// export {
//     usersInterestedInVideoGames,
//     usersInGermany,
//     usersWithMasters,
//     designationBasedOnLanguage

// }
