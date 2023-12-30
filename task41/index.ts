// Array of magician's names

let magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn & Teller'];

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Calling the function to show the names of magicians
showMagicians(magicianNames);



