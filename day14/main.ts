// que 40:"ALBUM"
function make_album(artist_name:string,album_title:string,tracks?:number){
    let album:{
        artist:string,
        title:string,
        tracks?:number
    } ={
        artist:artist_name,
        title:album_title,
    };
    if(tracks !==undefined){
        album.tracks=tracks;
    }
    return album;
}

let album1= make_album("hamza","artist title 1",)
let album2=make_album("Anas","artist title 2")
let album3=make_album("Atif","artist title 3",7)

console.log(album1)
console.log(album2)
console.log(album3)

// QUE 41:"Magicians"
let magicians=["a","b","c","d","e","f"]
function show_magicians(magicians){
magicians.forEach(magic => console.log(magic))
}
show_magicians(magicians)

//Que 42:"The Great Magicians"

function make_great(magicians){
magicians.forEach(great => console.log(`the great ${great}`))
}
make_great(magicians)
