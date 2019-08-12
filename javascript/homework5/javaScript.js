function createNewUser() {
    let firstName = prompt('Please enter your First Name', "Bob");
    let lastName = prompt('Please enter your Last Name', "Doe");
   let birthday= prompt('Please enter your birthday date `dd.mm.yyyy', "20.02.2000");

   let newUser = {
        name: firstName,
        surname: lastName,
        birthdayDate: birthday,

        getAge(birthdayDate) {
            let parts = this.birthdayDate.split('.');
            let now = new Date();
            let years = now.getFullYear() - Number(parts[2]);
            let bMonth = Number(parts[1]);
            let bDate = Number(parts[0]);
            let nowMonth = now.getMonth() + 1
            if (nowMonth > bMonth) return years;
            if ((nowMonth== bMonth) && (now.getDate() > bDate)) return years;
            return years - 1;
            },

        getPassword(birthdayDate) {
            let birthdayYear= +(this.birthdayDate.slice(6));
            result = (this.name[0].toLowerCase() + this.surname.toLowerCase() +birthdayYear);
            return result
        }
    };
    console.log(newUser);
    console.log(newUser.getAge());
    console.log(newUser.getPassword());
}
createNewUser();






