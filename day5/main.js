//que 13:
var cars = ["corolla", "civic", "alto"];
cars.forEach(function (car) { console.log("My dream car is".concat(car)); });
// example
var days = ["monday", "tuesday", "wednesday", "thursday"];
days.forEach(function (day) { console.log("It's difficult to go shopping on".concat(day)); });
//que 14"GUEST LIST"
var guestsList = ["sara", "madiha", "areeba", "maria", "qaria"];
guestsList.forEach(function (guestList) { console.log("".concat(guestList, ", you are invited in my birthday party tomorrow.")); });
// example
var relatives = ["warisha", "omema", "laiba", "kiran"];
relatives.forEach(function (relative) { console.log("".concat(relative, ", you are invited to my birthday party tomorrow")); });
//que 15 "CHANGING GUEST LIST"
var notComing = guestsList[1];
console.log("".concat(notComing, " can't attend the party today."));
//"REPLACEMENT GUEST"
guestsList.splice(1, 1, "neha");
//"NEW INVITATION"
guestsList.forEach(function (guestList) { console.log("".concat(guestList, ",would you like to attend a birthday party tomorrow?")); });
