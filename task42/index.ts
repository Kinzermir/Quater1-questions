// forEach was used to simply display each magician's name.

// map was used to modify the magician's names by adding "the Great" to each name and creating a new array with these modified names.

function showMagicians(magicians: string[]):void{
    magicians.forEach(magicians => {
        console.log(magicians);
        
    });
}
// map was used to modify each magician's name by adding "the Great" in front of it.

function makeGreat (magician: string[]):string[]{
    return magician.map(magician => `the great ${magician}`);   //in map we add the great 
}

let magicianNames : string[] = ["mir","hadi"]
let greatMagicians : string[] = makeGreat(magicianNames)

showMagicians(greatMagicians)