let Table = [];
Table.push(78);
Table.push(150);
Table.push(73);
Table.push(7);
Table.push(54);
Table.push(32);

let max = 0;
for (let i = 0 ; i < Table.length ; i++){
    if (Table[i]>max){
        max = Table[i];
    }
}

console.log("Le plus grand noombre de tableau est : ", max)