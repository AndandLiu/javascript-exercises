const palindromes = function (str) {
    let palindromesCheck = true;

    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    str = str.replace(/\s/g, '');

    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() != str[str.length - i - 1].toLowerCase()) {
            palindromesCheck = false;
        }
    }
    return palindromesCheck;
};

// Do not edit below this line
module.exports = palindromes;
