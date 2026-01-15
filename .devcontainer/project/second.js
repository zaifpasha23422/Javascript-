const form =  document.querySelector('form')
const p =  document.querySelector('#demo')
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(height=== '' || height < 0 ||  isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }else if(height=== '' || height < 0 ||  isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML = `${bmi}`
    }

    if(results.innerHTML<19){
    document.write("underweight")
    }else if(results.innerHTML>19 && results.innerHTML<25){
       document.write("healthy")
    }else{
        document.write("overweight")
    }    
});

