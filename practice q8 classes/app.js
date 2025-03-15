 let DATA = "secret information.";
 class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data =", DATA);
    }
 }

 let student1 = new User("Talha", "talha@gmail.com");
 let student2 = new User("Ali", "ali@gmail.com");

 console.log(student1);
 console.log(student1.viewData());

 // ans 2
 class Admin extends User{
    constructor(name, email){
        super();   // User class k constructor of call krny k liya "super" keyword is very important.
        this.name = name;
        this.email = email;
    }

    editData(){
        DATA = "This is new edit data."
    }
 }

 let Admin1 = new Admin("Admin", "admin@gmail.com");
 console.log(Admin1.editData(DATA));