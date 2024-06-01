// que 28:"Stages of life"
let age=24
if(age<2){
  console.log("you are a baby")
}
else if (age>=2 && age<4){
    console.log("you are a toddler")
}
else if(age>=4 && age<13){
    console.log("you are a kid")
}
else if(age>=13 && age< 20){
    console.log("you are a teenager")
}
else if(age>=20 && age< 65){
    console.log("you are an adult")
}
else if(age>=65){
    console.log("you are elder")
}
//que 29:"favourite fruit"
let favouriteFruits=["apple","orange","banana"]
if(favouriteFruits.includes("orange")){
    console.log("i really like it")
}
else if(favouriteFruits.includes("apple")){
    console.log("i really love it")
}
//que 30:"Hello Admin":
let thenames=["admin","user","user2","user3"]
thenames.forEach(thename=>{
    if (thename === "admin"){
        console.log("hello,admin would you like to see a status report?")
    } else{
        console.log(`hello,${thename},thank you for logging in again.`)
    }
})
// example
let theguests=["warisha","maria","qaria"]
theguests.forEach(theguest=>{
    if (theguest=="warisha"){
        console.log("hello,warisha how are you?")
    } else {
        console.log(`hello,${theguest},hope you are well`)
    }
})

