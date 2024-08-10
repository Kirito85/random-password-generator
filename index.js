function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = 'qwertyuiopasdfghjklzxcvbnm';
    const uppercaseChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const numbersChars = '1234567890';
    const symbolsChars = '!@#$%^&*()_-=+';

    let allowedChars = '';
    let password = '';

    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numbersChars;
    if (includeSymbols) allowedChars += symbolsChars;

    if (length <= 0) {
        return `(password length must be at least 1)`;
    }
    if (allowedChars.length === 0) {
        return `(at least one type of character must be selected)`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function generateAndDisplayPassword() {
    const passwordLength = parseInt(document.getElementById('passwordLength').value, 10);
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

    document.getElementById('passwordOutput').textContent = password;
}