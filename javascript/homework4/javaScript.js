function createNewUser() {
    let firstName = prompt('Please enter your First Name', "Bob");
    let lastName = prompt('Please enter your Last Name', "Doe");
    let newUser = {
        name: firstName,
        surname: lastName,
        getLogin() {
            console.log(this.name[0].toLowerCase() + this.surname.toLowerCase());
        }
    };

    newUser.getLogin();

}

createNewUser();






