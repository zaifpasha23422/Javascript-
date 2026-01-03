// Immediate Invoked  Function Expression 

(function chai(){
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("zaif")