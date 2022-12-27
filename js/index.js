const isEmpty = (cadena) => {
    return (cadena.length == 0 || cadena == ' ')?true : false;
}

const isNegative = (number) => {
    return (number< 0)?true : false;
}

const isMonth = (month) => {
    return ((month >= 01) && (month <= 12))?true : false;
}

const correctLength = (number,length) => {
    return (number.length == length)?true : false;
}

document.getElementById("form-button").addEventListener("click", verificar);
document.getElementById("send-button").addEventListener("click", restart);

let correctName = false;
let correctNumber = false;
let correctDate = false;
let correctCvc = false;

function checkName(){

    let emptyName = 'Name cannot be empty';
    let notName = 'Please enter just letters and spaces'

    let name = document.getElementById('input-name').value;
    
    if(isEmpty(name)){
        document.getElementById('name-error').innerHTML = emptyName;
        document.getElementById('input-name').style.border = "1px solid var(--red)";
    }
    else{
        document.getElementById('name-error').innerHTML = '';
        document.getElementById('input-name').style.border = "1px solid var(--light-grayish-violet)";
        correctName = true;
    }
}

function checkNumber(){
    let emptyNumber = 'Card number cannot be empty';
    let negativeNumber = 'Card number cannot be negative';
    let lengthNumber = 'Card number must have 16 digits'
    let longNumber = 16;

    let number = document.getElementById('input-number').value;
    
    if(isEmpty(number)){
        document.getElementById('number-error').innerHTML = emptyNumber;
        document.getElementById('input-number').style.border = "1px solid var(--red)";
    }
    else{
        if(isNegative(number)){
            document.getElementById('number-error').innerHTML = negativeNumber;
            document.getElementById('input-number').style.border = "1px solid var(--red)";
        }
        else{
            if(!correctLength(number,longNumber)){
                document.getElementById('number-error').innerHTML = lengthNumber;
                document.getElementById('input-number').style.border = "1px solid var(--red)";
            }
            else{
                document.getElementById('number-error').innerHTML = '';
                document.getElementById('input-number').style.border = "1px solid var(--light-grayish-violet)";
                correctNumber = true;
            }
        }
    }
}

function checkDate(){
    let emptyDate = 'Card date (month or year) cannot be empty';
    let negativeDate = 'Card date (month or year) cannot be negative';
    let lengthDate = 'Month and year must have 2 digits';
    let monthYearDate = 'Month between 01 and 12.'

    let long = 2;

    let dateMonth = document.getElementById('input-month').value;
    let dateYear = document.getElementById('input-year').value;
    
    if(isEmpty(dateMonth) || isEmpty(dateYear)){
        document.getElementById('date-error').innerHTML = emptyDate;
        document.getElementById('input-month').style.border = "1px solid var(--red)";
        document.getElementById('input-year').style.border = "1px solid var(--red)";
    }
    else{
        if(isNegative(dateMonth) || isNegative(dateYear)){
            document.getElementById('date-error').innerHTML = negativeDate;
            document.getElementById('input-month').style.border = "1px solid var(--red)";
            document.getElementById('input-year').style.border = "1px solid var(--red)";
        }
        else{
            if(!isMonth(dateMonth)){
                document.getElementById('date-error').innerHTML = monthYearDate;
                document.getElementById('input-month').style.border = "1px solid var(--red)";
            }
            else{
                if(!correctLength(dateMonth,long) || !correctLength(dateYear,long)){
                    document.getElementById('date-error').innerHTML = lengthDate;
                    document.getElementById('input-month').style.border = "1px solid var(--red)";
                    document.getElementById('input-year').style.border = "1px solid var(--red)";
                }
                else{
                    document.getElementById('date-error').innerHTML = '';
                    document.getElementById('input-month').style.border = "1px solid var(--light-grayish-violet)";
                    document.getElementById('input-year').style.border = "1px solid var(--light-grayish-violet)";
                    correctDate = true;
                }
            }
        }
    }
}

function checkCvc(){
    let emptyCvc = 'Card CVC cannot be empty';
    let negativeCvc = 'Card CVC cannot be negative';
    let lengthCvc = 'Card CVC must have 3 digits';
    let longCvc = 3;

    let cvc = document.getElementById('input-cvc').value;
    
    if(isEmpty(cvc)){
        document.getElementById('cvc-error').innerHTML = emptyCvc;
        document.getElementById('input-cvc').style.border = "1px solid var(--red)";
    }
    else{
        if(isNegative(cvc)){
            document.getElementById('cvc-error').innerHTML = negativeCvc;
            document.getElementById('input-cvc').style.border = "1px solid var(--red)";
        }
        else{
            if(!correctLength(cvc,longCvc)){
                document.getElementById('cvc-error').innerHTML = lengthCvc;
                document.getElementById('input-cvc').style.border = "1px solid var(--red)";
            }
            else{
                document.getElementById('cvc-error').innerHTML = '';
                document.getElementById('input-cvc').style.border = "1px solid var(--light-grayish-violet)";
                correctCvc = true;
            }
        }
    }
}

function resetValues(){
    document.getElementById('input-name').value = '';
    document.getElementById('input-number').value = '';
    document.getElementById('input-month').value = '';
    document.getElementById('input-year').value = '';
    document.getElementById('input-cvc').value = '';
    correctName = false;
    correctNumber = false;
    correctDate = false;
    correctCvc = false;
}


function verificar(){
    checkName();
    checkNumber();
    checkDate();
    checkCvc();

    if(correctName && correctNumber && correctDate && correctCvc){
        document.getElementById('form').style.display = "none";
        document.getElementById('send').style.display = "flex";
    }
}

function restart(){
    resetValues();
    document.getElementById('form').style.display = "flex";
    document.getElementById('send').style.display = "none";
}