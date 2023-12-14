let current_users: string[] = ['John', 'Alice', 'Bob', 'Eva', 'Mia'];
let new_users: string[] = ['ALICE', 'Bob', 'Sarah', 'MIA', 'Chris'];

for (let i = 0; i < new_users.length; i++) {
    let newUserLowerCase = new_users[i].toLowerCase(); // Convert to lowercase for comparison

    if (current_users.some(user => user.toLowerCase() === newUserLowerCase)) {
        console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_users[i]}' is available.`);
    }
}






