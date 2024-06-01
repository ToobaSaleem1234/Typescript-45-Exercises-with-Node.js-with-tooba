// que 31;"No users"
let users=["sana","samina","saya","hiba"]
users=[]
if(users.length===0){
    console.log("we need to find some users")
}else{
users.forEach(theUser => {
    if(theUser==="sana"){
        console.log("win")
    }
    else{
        console.log("lose")
    }
}
)}

// que 32:"checking usernames"

let current_users=["asma","saba","serish","alishba","sumbul","sania"]
let new_users=["aiman","alishah","serish","maham","sania","wajiha"]
new_users.forEach(new_one_user=>{
    let condition=current_users.some(current_one_user=>current_one_user.toLowerCase()=== new_one_user.toLowerCase())
    if(condition){
        console.log(`sorry ${new_one_user}, is already taken!`)

    } else{
        console.log(`Congratulations, ${new_one_user},is availbale.`)
    }
})

//que 33:"Ordinal Numbers:"

let numbers=[1,2,3,4,5,6,7,8,9]
for(let oneNumber of numbers){
    let ordinalNumber:String
if(oneNumber===1){
    ordinalNumber ="st"
}
else if(oneNumber===2){
    ordinalNumber="nd"
}
else if(oneNumber===3){
    ordinalNumber="rd"
}
else{
    ordinalNumber="th"
}
console.log(`${oneNumber}${ordinalNumber}`)
}





