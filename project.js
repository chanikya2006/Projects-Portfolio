console.log(1);
const form=document.getElementById('form');
form.addEventListener('submit',(e)=>{
    const result1=document.getElementById('1').value;
    const result2=document.getElementById('2').value;
    const result3=document.getElementById('3').value;
    const result4=document.getElementById('4').value;
    const error=document.getElementById('error');
    console.log(result1);
    // if(typeof result1 != Number ){
    //     e.preventDefault();
    //     error.innerHTML='*Invalid Rating';
    // }
    // if(typeof result2 != Number ){
    //     e.preventDefault();
    //     error.innerHTML='*Invalid Rating';
    // }
    // if(typeof result3 != Number ){
    //     e.preventDefault();
    //     error.innerHTML='*Invalid Rating';
    // }
    // if(typeof result4 != Number ){
    //     e.preventDefault();
    //     error.innerHTML='*Invalid Rating';
    // }
    if( result1 != 0 && result1 != 1 && result1 != 2 && result1 != 3 && result1 != 4 && result1 != 5){
        e.preventDefault();
        error.innerHTML='*Invalid Rating';
    }
    if(result2 != 0 && result2 != 1 && result2 != 2 && result2 != 3 && result2 != 4 && result2 != 5){
        e.preventDefault();
        error.innerHTML='*Invalid Rating';
    }
    if(result3 != 0 && result3 != 1 && result3 != 2 && result3 != 3 && result3 != 4 && result3 != 5){
        e.preventDefault();
        error.innerHTML='*Invalid Rating';
    }
    if(result4 != 0 && result4 != 1 && result4 != 2 && result4 != 3 && result4 != 4 && result4 != 5){
        e.preventDefault();
        error.innerHTML='*Invalid Rating';
    }


})