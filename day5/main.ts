//que 13:
let cars=["corolla","civic","alto"]
cars.forEach(car=>{console.log(`My dream car is${car}`)})
// example
let days=["monday","tuesday","wednesday","thursday"]
days.forEach(day=>{console.log(`It's difficult to go shopping on${day}`)})

//que 14"GUEST LIST"
let guestsList =["sara","madiha","areeba","maria","qaria"]
guestsList.forEach(guestList=>{console.log(`${guestList}, you are invited in my birthday party tomorrow.`)})
// example
let relatives =["warisha","omema","laiba","kiran"]
relatives.forEach(relative=>{console.log(`${relative}, you are invited to my birthday party tomorrow`)})

//que 15 "CHANGING GUEST LIST"
let notComing=guestsList[1]
console.log(`${notComing} can't attend the party today.`)
//"REPLACEMENT GUEST"
guestsList.splice(1,1,"neha")
//"NEW INVITATION"
guestsList.forEach(guestList=>{console.log(`${guestList},would you like to attend a birthday party tomorrow?`)})

    