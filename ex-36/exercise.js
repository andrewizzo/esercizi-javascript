const repeatHello = () => {
    const interval = setInterval(() => {
        console.log('hello');
    },1000);
    setTimeout(() => clearInterval(interval),5000);
};

repeatHello();
