const isLogged = true;

const checkNumber = (para) => {
    return new Promise ((resolve,reject) => {
        if(para){
            setTimeout(() => {
                const randomNum = Math.random();
                resolve(randomNum);

            },1000);
        }else{
            reject("something went wrong")
        }
    });
};

const printPerson = (num) => {
    return new Promise((resolve,reject) => {
        if (num > 0.5){
            setTimeout(() => {
                const obj = {name: "John", age: 24};
                resolve(obj);
            },1000);
        }else{
            reject("something went wrong again")
        }
    })
}

checkNumber(isLogged)
    .then((randomNum) => printPerson(randomNum))
    .then((obj) => {
        console.log(obj);
    })
    .catch((error) => {
        console.error(error);
    })