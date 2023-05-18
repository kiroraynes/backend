
let numArr = [5,12,30,46, 40]

for (let i = 0; i<numArr.length; i++){
    if (numArr[i]%5 === 0){
        console.log(numArr[i], "is divisible by 5.")
    }
    else {
        console.log(numArr[i]), "is not divisible by 5."
    }
}