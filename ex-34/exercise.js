const printAsynName = (callback,name) => {
    setTimeout(() => {
        console.log(name);
    },2000);
    setTimeout(callback,1000);
}
const sal = () => {console.log('Hello');}

printAsynName(sal,'Andrea');