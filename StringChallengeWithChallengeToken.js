const ChallengeToken = "lm03xvw4fd";
function StringChallengeWithChallengeToken(str) {

    var newChar = '', newString = ''; newString = str.replace(/./g,
        function (myChar) {
            //use the replace to iterate and rebuild string 		
            if (myChar.match(/[a-z]/)) {
                newChar = myChar.toUpperCase();
            } else if (myChar.match(/[A-Z]/)) {
                newChar = myChar.toLowerCase();
            } else {
                newChar = myChar;
            }
            return newChar;
        });

    console.log(newString);
    let lastWord = removeExistChar(newString);
    return lastWord.join("");
}


const removeExistChar = (str) => {
    const arr = [...str];
    const checker = value => ![...ChallengeToken].some(element => value.toLowerCase().includes(element.toLowerCase()));    
    return arr.filter(checker)
}


// keep this function call here 
console.log(StringChallengeWithChallengeToken("Hello-LOL"));


