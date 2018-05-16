const multTable = () => {
    const multTable = [];
    for (let i = 1; i <= 10; i++) {
        let arr = [];
        for (let j = 1; j <= 10; j++) {
            arr.push(j*i);
        }
        multTable.push(arr)
    }
    return multTable;
}

console.log(multTable());