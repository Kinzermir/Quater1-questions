type shirtSize = "small" | "medium" | "large";

// type allias for reusibility 
// i use type shirtSize  to size

function makeShirt(message: string = "I love typescipt", size : shirtSize ="large"):void{
    console.log(`Creating a ${size} shirt with the message "${message}`);

    // we used void to execute medium and large 
}
makeShirt();
makeShirt(undefined,"medium");
makeShirt("hello world", "small") //in function we have two paramters message & size but in this line we used "hello world" inspight of message and viceversa 



