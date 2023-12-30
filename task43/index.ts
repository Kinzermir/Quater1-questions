function showMagicians(magicians : string[]):void{
    magicians.forEach(magic => {
        console.log(magic);
        
    });
}
function makeGreat(magicians: string[]): string[] {
   return magicians.map(magic => `The Great ${magic}`

   )
}

let magiciansName : string []= ["martin", "James","viliam"]    
let modifiedNames : string[] = makeGreat([...magiciansName])   // making copy for not changing in orgnal array 

showMagicians(magiciansName)  // Show original names
showMagicians(modifiedNames)  // Show names with "the Great" added