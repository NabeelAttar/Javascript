const coding = ["js", "php", "cpp", "java", "python"]

const values = coding.forEach(item  => {
    return item
});
console.log(values); //output gives undefined 

//hence we use filter for returning value in specific cases
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const filteredNUms = nums.filter( (num) => num > 4 )
// explicit return -> {} used, scope started
const filteredNUms = nums.filter( (num) => {
    return num > 4
} )
console.log(filteredNUms);

//we need to take a sample array and then push elements in it to return with for each , no filter
const newNums = []
nums.forEach(num => {
    if(num > 4){
        newNums.push(num)
    }
});
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const historyBooks = books.filter( (bk) => bk.genre === 'History' )
console.log(historyBooks);

const after2000 = books.filter( (bk) => {return bk.publish >= 1995 && bk.genre === 'History'} )
console.log(after2000);
