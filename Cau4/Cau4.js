class Staff {
    constructor(fullname, email) {
        this.fullname = fullname;
        this.email = email;

        this.setFullname = (fullname) => {
            this.fullname = fullname;
        }
        this.getFullname = () => {
            return this.fullname;
        }
        this.setEmail = (email) => {
            this.email = email;
        }
        this.getEmail = () => {
            return this.email;
        }
        this.toString = () => {
            return `FullName: ${this.fullname}, Email: ${this.email}`;
        }
    }
}

let david = new Staff("David", "david@gmail.com");
david.setFullname("David Do");
david.setEmail("david.do@gmail.com");

let staffs = new Array(
    david,
    new Staff("Cao Minh Anh", "cao.minhanh@gmail.com"),
    new Staff("Anh Zero", "nhuGmailTren@gmail.com")
);

// staffs.push(david);
// staffs.push(new Staff("Cao Minh Anh", "cao.minhanh@gmail.com"));
// staffs.push(new Staff("Anh Zero", "nhuGmailTren@gmail.com"));

for (let staff of staffs) {
    console.log(staff.toString());
}
