function thesame(arr1,arr2){
    if(arr1.length != arr2.length)
        return false;
    let new1 = [...arr1].sort();
    let new2 = [...arr2].sort();
    for(let i=0; i<new1.lengthl; i++)
        if (new1[i]!=new2[i])
            return false
    return true;
}
    
function shopping(arr1,arr2){
    return new Promise((resolve,reject) => {
        const isGood  = thesame(arr1,arr2)
        if (isGood == true) 
            resolve ("good work")
        else
            reject("you forgot some products")
    })
}



const arr1 = ["milk", "bread", "apples"];
const arr2 = ["apples", "milk", "bread"]; 
const arr3 = ["milk", "chocolate"];

shopping(arr1, arr2)
    .then((result) => {
        console.log(" Good result:", result); // 
    })
    .catch((error) => {
        console.log("error:", error);
    });


shopping(arr2, arr3)
    .then((result) => {
        console.log(" Good result:", result);
    })
    .catch((error) => {
        console.log("error:", error); // 
    });