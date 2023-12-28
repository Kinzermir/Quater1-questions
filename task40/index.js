// // type allias in an function
function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating album dictionaries using the function
var album1 = makeAlbum('Artist 1', 'Album Title 1');
var album2 = makeAlbum('Artist 2', 'Album Title 2', 12);
var album3 = makeAlbum('Artist 3', 'Album Title 3', 8);
// Printing the album information
console.log(album1);
console.log(album2);
console.log(album3);
