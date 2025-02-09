import users from "./users.js"
import {
    usersInterestedInVideoGames,
    usersInGermany,
    usersWithMasters,
    designationBasedOnLanguage
} from "./solution.js"

var newData = []

// console.log(usersInterestedInVideoGames(users)); //[ 'John', 'Ron' ]
// console.log(usersInterestedInVideoGames()); //Please provide the data
// console.log(usersInterestedInVideoGames(newData)); //[]

console.log(usersInGermany(users)); //[ 'Wanda', 'Pike' ]
// console.log(usersInGermany()); //Please provide the data
// console.log(usersInGermany(newData)); //[]
// console.log(usersInGermany("hello")); //[]

// console.log(usersWithMasters(users)); //[ 'John', 'Rob' ]
// console.log(usersWithMasters()); //Please provide the data
// console.log(usersWithMasters("hello")); //[]
// console.log(usersWithMasters(newData)); //[]


// console.log(designationBasedOnLanguage(users));
// {
// python: [ 'Pike' ],
// javascript: [ 'Wanda', 'Rob' ],
// golang: [ 'John', 'Ron' ]
// }
// console.log(designationBasedOnLanguage()); //Please provide the data
// console.log(designationBasedOnLanguage(newData)); //{ python: [], javascript: [], golang: [] }
// console.log(designationBasedOnLanguage("hello")); //{ python: [], javascript: [], golang: [] }



