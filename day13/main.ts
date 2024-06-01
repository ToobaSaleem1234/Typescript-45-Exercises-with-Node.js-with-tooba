// que 37:"large shirts"
function make_shirts(size:string="small",message:string="Quality is good")
{
    console.log(`Make a sample of 1 shirt in ${size} size, and print ${message} in it.`)
}
make_shirts()
make_shirts("Medium")
make_shirts("Large")

// que 38:"cities"
function city(city:string,country:string="PAKISTAN"){
    console.log(`${city}, is in ${country}.`)
}
city("Karachi")
city("Lahore")
city("Islamabad")

//que 39:"Return cities"
function city_place(city:string,country:string){
    return city + country}
let trip=city_place("\"Karachi","Pakitan\"")
console.log(trip)
console.log(city_place("\"lahore","islamabad\""))
