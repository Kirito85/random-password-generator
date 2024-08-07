function generatePassword(lenght, includeLowercase,includeUppercase ,includeNumbers, includeSymbols ){
    const lowercaseChars = 'qwertyuiopasdfghjklzxcvbnm';
    const UppercaseChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const numbersChars = '1234567890';
    const symbolsChars = '!@#$%^&*()_-=+';

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? UppercaseChars : "";
    allowedChars += includeNumbers ? numbersChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";
    
    

    if(lenght <= 0){
        return`(password lenght must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(at least one type of character must be selected)`;
    }
    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
        
    return password;
}


const passwordlenght = parseInt(prompt('Enter the desired password lenght:'),10);
const includeLowercase = true;// or false
const includeUppercase = true; // or false
const includeNumbers = false; // or false
const includeSymbols = false;

const password = generatePassword(passwordlenght,
                                includeLowercase,
                                includeUppercase,
                                includeNumbers,
                                includeSymbols);
console.log(`generate password: ${password}`);
