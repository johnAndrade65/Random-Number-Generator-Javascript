/*==BUTTON VARIABLE==*/
const button = document.getElementById('generate');

/*==BUTTON EVENT CLICK==*/
button.addEventListener('click', function(){

    /*==GET MIN AND MAX VALUE==*/
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    /*==RESULT = MATH OPERATION==*/
    let result = Math.floor(Math.random() * (max - min +1 )) + min;

    /*==CHECK IF THE NUMBER IS VALID==*/
    if(isNaN(result)){
        result = 'Invalid value';
    }

    /*==GET THE SPAN THAT IS INSIDE THE RESULT==*/
    document.querySelector('#result > span').textContent = result;
});