function makeShirt(message, size) {
    if (message === void 0) { message = "I love typescipt"; }
    if (size === void 0) { size = "large"; }
    console.log("Creating a ".concat(size, " shirt with the message \"").concat(message));
}
makeShirt();
makeShirt(undefined, "medium");
makeShirt("hello world", "small");
// type ShirtSize = 'small' | 'medium' | 'large';
// function makeShirt(message: string = 'I love TypeScript', size: ShirtSize = 'large'): void {
//     console.log(`Creating a ${size} shirt with the message: "${message}"`);
// }
// // Creating a large shirt with the default message
// makeShirt();
// // Creating a medium shirt with the default message
// makeShirt(undefined, 'medium');
// // Creating a shirt of any size with a different message
// makeShirt('Hello, world!', 'small');
