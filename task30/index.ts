let username = ["admin","eric","martin"]
for (let i = 0; i <username.length; i++){
    if(username[i]=== "admin"){
        console.log("Hello admin, would you like to see a status report?");
        
    }else {
        console.log(`hello ${username[i]} thanks for uou logging in again`);
        
    }
}