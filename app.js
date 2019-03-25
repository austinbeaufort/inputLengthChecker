

function checkPasswordLength () {

    input = document.querySelector('.input');
    output = document.querySelector('.output');
    checkTextLength = document.querySelector('.checkTextLength');
    textLengthDisplay = document.querySelector('.textLengthDisplay');

    
    input.addEventListener('keyup', event => {
        let userInput = event.target.value;
        output.textContent = userInput;
        
        let textLength = userInput.length;
        checkTextLength.textContent = `Text Length: ${textLength}`;
    
        if (textLength <= 3) {
            textLengthDisplay.textContent = 'Password is too short';
        }
        else if (textLength >= 10) {
            textLengthDisplay.textContent = 'Password is too long';
        }
        else {
            textLengthDisplay.textContent = "✅";
        }
    });
}

checkPasswordLength();


