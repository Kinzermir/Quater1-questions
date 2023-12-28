type Album = {
    artist: string;
    title: string;
    tracks?: number; // Optional tracks property
};

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist,
        title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Creating album dictionaries using the function
const album1 = makeAlbum('Artist 1', 'Album Title 1');
const album2 = makeAlbum('Artist 2', 'Album Title 2', 12);
const album3 = makeAlbum('Artist 3', 'Album Title 3', 8);

// Printing the album information
console.log(album1);
console.log(album2);
console.log(album3);
