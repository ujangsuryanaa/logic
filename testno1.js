let Input = [10, 20, 20, 10, 10, 30, 50, 20, 20];
let Input1 = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
let input2 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]

function getData(data) {
    let object = {};

    data.forEach((item) => {
        object[item] = object[item] ? object[item] + 1 : 1;
    });

    return Object.values(object).reduce((acc, curr) => {
        acc += Math.floor(curr / 2);
        return acc;
    }, 0);
}

console.log(getData(Input));
console.log(getData(Input1));
console.log(getData(input2));