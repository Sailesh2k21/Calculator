let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            input.value = string;
        } 
        
        else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } 
        
        else if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } 
        
        else {
            if (isOperator(e.target.innerHTML)) {
                if (isOperator(string.charAt(string.length - 1))) {
                    // Do not add the operator if the last character is also an operator
                    return;
                }
            }
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

function isOperator(char) {
    return ['+', '-', '*', '/', ''].includes(char);
}
