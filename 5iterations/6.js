const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = nums.map( (num) => num + 10 )

const newNums = nums
                .map( (num) => num*10 )
                .map( (num) => num + 1 )
                .filter( (num) => num>=40 )
// filter is used to filter out the values based which fulfill some condition and map is used to perform operation on existing values 
// using map, array is returned automatically, so when .map().map , the values used for second map will be the output from first map , this is called chaining 




console.log(newNums);