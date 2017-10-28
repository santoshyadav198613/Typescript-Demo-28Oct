let firstName: string;// = 'Anna';
let age: number;
let dob: Date;
let isValid: boolean;

const pi: number = 3.15;

let emp: any; // should be avoided

emp = 'Nutan';
emp = 10;

let empList: any[];

let books: string[] = [];

books.push('Java');
books.push('.Net');

books.forEach(function (book) {
    console.log(book);
});

for (let book of books) {
    console.log(book);
}

// books.push(10);

let bookList: Array<string> = new Array<string>();

let unionTypes: string | string[] | number;

