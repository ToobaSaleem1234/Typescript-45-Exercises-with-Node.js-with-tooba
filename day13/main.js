// que 37:"large shirts"
function make_shirts(size, message) {
    if (size === void 0) { size = "small"; }
    if (message === void 0) { message = "Quality is good"; }
    console.log("Make a sample of 1 shirt in ".concat(size, " size, and print ").concat(message, " in it."));
}
make_shirts();
make_shirts("Medium");
make_shirts("Large");
// que 38:"cities"
function city(city, country) {
    if (country === void 0) { country = "PAKISTAN"; }
    console.log("".concat(city, ", is in ").concat(country, "."));
}
city("Karachi");
city("Lahore");
city("Islamabad");
//que 39:"Return cities"
function city_place(city, country) {
    return city + country;
}
var trip = city_place("Karachi", "Pakitan");
console.log(trip);
console.log(city_place("lahore", "islamabad"));
