"use strict";
// que 16:"adding more guests":
let friends = ["neha", "areeba", "hamza", "anus"];
console.log("Great news!I have found a big table for get together.");
friends.unshift("tooba", "sara"); //add
friends.splice(1, 1, "saba"); // remove and add
friends.push("ammi"); // add in last
friends.forEach(friends => {
    console.log(`${friends},you have to come
`);
});
//que 17:"shrink guest list"
let members = ["neha", "areeba", "hamza", "anus", "tooba"];
console.log("UNFORTUNATELY!we can't found a big table");
while (members.length > 2) {
    let removedMember = members.pop();
    console.log(`Sorry ${removedMember},I can't invite you`);
}
members.forEach(member => { console.log(`${member},you are still invited.`); });
members.pop();
members.pop();
console.log("Empty list", members);
//que 18"seeing the world"
let places = ["Karachi", "Islamabad", "Multan", "China"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Still original order:", places);
console.log("Reverse alphabetical order:", [...places].reverse());
console.log("Still original order:", places);
console.log("Reverse array", places.reverse());
console.log("Reverse again:", places.reverse());
console.log("Alphabetical order:", places.sort());
console.log("Sort order reverse:", places.reverse());
