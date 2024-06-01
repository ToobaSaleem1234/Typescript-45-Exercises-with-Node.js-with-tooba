//que # 43:"unchanged magicians"
function show_magicians(magicians:string[]) {
  magicians.forEach(name=> {console.log(name)})

}
function make_great(magicians:string[]){
  return magicians.map(name => `the great ${name}`)
}
let magician_names=["harry porter","Mr.bean","Pokeman"]
let copy_magicians=magician_names.slice()
let copy_great_magicians=make_great(copy_magicians)
console.log("\n Original array")
  show_magicians(magician_names)

  console.log("\n Copied array")
  show_magicians(copy_great_magicians)



//que # 44:"Sandwich"
function make_sandwich(...items:string[]){
    console.log("\n\t Sandwich ingredients\t\n" )
    items.forEach(singleItems=>{console.log(singleItems)})
    console.log("\n\tEnjoy your meal\n\t")
}
make_sandwich("Chicken","Salad","Omlette")
make_sandwich("Kabab","Coleslaw","Onions")
make_sandwich("Mayonise","Fries","Cucumber","Tomato")

//que # 45:"Cars":
function create_cars(manufacturer,model,...features){
   let car={
     manufacturer:manufacturer,
     model:model
   }
features.forEach(features=>{
    let[key,value]=features.split(":")
    car[key.trim()]=value.trim()
})
return car
}
let my_car=create_cars("Toyota","Corolla","Color:Black","Sunroof:yes")
console.log(my_car)
