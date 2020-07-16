// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// Kata 0
const greeneyes1 = users.filter(function (user) {
   
    return user.eyeColor === "green"
    
})
printKata(0, greeneyes1)

// // Kata 1

 const isActve = users.filter( function (user) {
   console.log(user.isActive) 
     return user.isActive === true
    
 }) 
 printKata(1,isActve)
 

//  Kata 2

const emailaddress = users.map (function(user) {
   
    return user.email
 
})
printKata (2,emailaddress)
// Kata 3
const ovation = users.some (function (user) {
   return user.company === "OVATION"
})
printKata (3, ovation)

// Kata 4
const agegroup = users.find(function(user) {

   return user.age === 38
})

printKata (4, agegroup)

// Kata 5
const Ageactive = users.filter(function (user){
return user.age >= 38
}).find(user => user.isActive)
printKata(5,Ageactive)
    
// Kata 6
const companybalance= users.filter(function (user) {
    return user.company === "ZENCO"
}).map(user => user.balance) 
printKata (6, companybalance)

// Kata 7
const ageofallemployee = users.filter (function (user) {
return user.company === "fugiat"
}).map(user => user.tags.includes)
printKata(7,ageofallemployee)