// que 31;"No users"
var users = ["sana", "samina", "saya", "hiba"];
users = [];
if (users.length === 0) {
    console.log("we need to find some users");
}
else {
    users.forEach(function (theUser) {
        if (theUser === "sana") {
            console.log("win");
        }
        else {
            console.log("lose");
        }
    });
}
// que 32:"checking usernames"
var current_users = ["asma", "saba", "serish", "alishba", "sumbul", "sania"];
var new_users = ["aiman", "alishah", "serish", "maham", "sania", "wajiha"];
new_users.forEach(function (new_one_user) {
    var condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (condition) {
        console.log("sorry ".concat(new_one_user, ", is already taken!"));
    }
    else {
        console.log("Congratulations, ".concat(new_one_user, ",is availbale."));
    }
});
//que 33:"Ordinal Numbers:"
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinalNumber = void 0;
    if (oneNumber === 1) {
        ordinalNumber = "st";
    }
    else if (oneNumber === 2) {
        ordinalNumber = "nd";
    }
    else if (oneNumber === 3) {
        ordinalNumber = "rd";
    }
    else {
        ordinalNumber = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalNumber));
}
