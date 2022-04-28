// two-dimensional array
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
var arr4 = [10, 11, 12];

// creating 2-D array
var arr2d = [arr1, arr2, arr3, arr4];
console.log(`2d array: ${arr2d}`);
console.log(`arr2d length: ${arr2d.length}`);

console.log(`------------------------------------------`);

// getting the whole row
console.log(`arr2d[1]: ${arr2d[1]}`);
console.log(`arr2d[3]: ${arr2d[3]}`);

console.log(`------------------------------------------`);

// getting specific elements from the row
console.log(`arr2d[1][2]: ${arr2d[1][2]}`);
console.log(`arr2d[3][0]: ${arr2d[3][0]}`);

console.log(`------------------------------------------`);

// modify elements in 2D array
arr2d[2][1] = 88;
console.log(`modified 8: ${arr2d}`);

arr2d[1] = [100, 200, 300];
console.log(`modified row1: ${arr2d}`);

console.log(`------------------------------------------`);

// removes the whole first row (index 0)
arr2d.splice(0, 1);
console.log(arr2d);
// removes the second element (index 1) of second row (row index 1)
arr2d[1].splice(1, 1);
console.log(arr2d);
// pushes 999 at the end of arr2d[2]
arr2d[2].push(999);
console.log(arr2d);

console.log(`------------------------------------------`);

// this does not work because arrays cannot be multiplied with each other
var result1 = arr2d[0] * arr2d[2];
console.log(`should not work: ${result1}`);

var result2 = arr2d[0][1] * arr2d[2][0];
console.log(`should work: ${result2}`);

// arr2d[1][1].pop(); should not work because it is not an array, it's a num value
// arr2d[2].pop(); & arr2d.pop(); should both work

console.log(`------------------------------------------`);

var arr2d_2 = [
    ['a', 'b', 'c'],
    ['가', '나', '다'],
    ['D', 'E', 'F']
];

for (var arr of arr2d_2) {
    for (var s of arr) {
        console.log(s);
    }
}

console.log(`------------------------------------------`);

// 3D Array --> length = 3
var arr3d = [
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8]
    ],
    [
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ],
    [
        [17, 18, 19, 20],
        [21, 22, 23, 24]
    ]
];

console.log(`arr3d의 길이: ${arr3d.length}`);
console.log(arr3d[0]);
console.log(arr3d[1][1]);
console.log(arr3d[0][1][2]);
