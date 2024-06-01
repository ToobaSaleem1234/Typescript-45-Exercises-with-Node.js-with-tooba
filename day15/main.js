//que # 43:"unchanged magicians"
//que # 44:"Sandwich"
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n\t Sandwich ingredients\t\n");
    items.forEach(function (singleItems) { console.log(singleItems); });
    console.log("\n\tEnjoy your meal\n\t");
}
make_sandwich("Chicken", "Salad", "Omlette");
make_sandwich("Kabab", "Coleslaw", "Onions");
make_sandwich("Mayonise", "Fries", "Cucumber", "Tomato");
//que # 45:"Cars":
function create_cars(manufacturer, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    features.forEach(function (features) {
        var _a = features.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = create_cars("Toyota", "Corolla", "Color:Black", "Sunroof:yes");
console.log(my_car);
