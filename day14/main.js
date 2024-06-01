// que 40:"ALBUM"
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("hamza", "artist title 1");
var album2 = make_album("Anas", "artist title 2");
var album3 = make_album("Atif", "artist title 3", 7);
console.log(album1);
console.log(album2);
console.log(album3);
// QUE 41:"Magicians"
var influencers = ["Natasha", "Merium", "Memona", "Kainat"];
function review_products(influencers) { influencers.forEach(function (influencer) { console.log("I often watch ".concat(influencer, ", channel.")); }); }
review_products(influencers);
//Que 42:"The Great Magicians"
function theGreat(influencers) {
    if (influencers === void 0) { influencers = [""]; }
    for (var i = 0; i < influencers.length; i++) {
        influencers[i] = influencers[i] + "the Great";
    }
}
theGreat(influencers);
review_products(influencers);
