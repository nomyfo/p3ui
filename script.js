const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const passwordDisplay = document.getElementById('passwordDisplay');
const lengthInput = document.getElementById('length');

// Checkbox elements
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numEl = document.getElementById('numbers');
const symEl = document.getElementById('symbols');

generateBtn.addEventListener('click', () => {
    const length = +lengthInput.value;
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasNum = numEl.checked;
    const hasSym = symEl.checked;

    passwordDisplay.innerText = genPass(length, hasUpper, hasLower, hasNum, hasSym);
    copyBtn.innerText = "Copy to Clipboard";
});

function genPass(length, upper, lower, num, sym) {
    let charPool = "";
    if (upper) charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) charPool += "abcdefghijklmnopqrstuvwxyz";
    if (num) charPool += "0123456789";
    if (sym) charPool += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    if (charPool === "") return "Select an option!";

    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        result += charPool.charAt(randomIndex);
    }
    return result;
}

copyBtn.addEventListener('click', () => {
    const pass = passwordDisplay.innerText;
    if (pass === "********" || pass === "Select an option!") return;

    navigator.clipboard.writeText(pass).then(() => {
        copyBtn.innerText = "Copied!";
        setTimeout(() => { copyBtn.innerText = "Copy to Clipboard"; }, 2000);
    });
});
