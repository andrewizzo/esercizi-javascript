const number =11;

const checkNum = (num) => {
    return new Promise ((resolve,rejectd) => {
        if(num > 10 && typeof num === 'number'){
            resolve("number is greater than 10")
        }else{
            rejectd("number is not greater than 10")
        }
    })
}

checkNum(number)
    .then((resolve) => {
        console.log("all to good end"," ",resolve)
    })
    .catch((error) => {
        console.error("didnt go well"," ",error)
    })