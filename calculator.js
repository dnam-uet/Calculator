const listElement = document.getElementsByClassName('calculate');
let result = document.getElementById('result');
let clear = document.getElementById('clear');
let backspace = document.getElementById('backspace');
let equalButton = document.getElementById('equal');

// Check Operator
function checkOperator(element){
    if(element === '/' || element === '*' || element === '+' || element === '-' || element === '.' || element === '%') return true;
    else return false;
}

// Add event insert operator or element into input result
for(let button of listElement)
    button.addEventListener('click',function(){
        // Check 2 operator consecutive -> input not change 
        if(result.value.length > 0){
            result.value += button.value;
            for(let i=0;i<result.value.length - 1;i++){
                if(checkOperator(result.value[i]) === true && checkOperator(result.value[i+1]) === true) 
                    result.value = result.value.substr(0,result.value.length-1);
            }
        }
        // Check first character of result != operator
        else{
            if(checkOperator(button.value) === false)
                result.value += button.value;
        }
    });

// Calculate and print result --> input result
equalButton.addEventListener('click',function(){
    if(result.value)
        result.value = eval(result.value);
});

// Clear all of input result
clear.addEventListener('click',function(){
    result.value = '';
});

// Backspace 1 element of input result
backspace.addEventListener('click',function(){
    result.value = result.value.substr(0,result.value.length - 1);
})