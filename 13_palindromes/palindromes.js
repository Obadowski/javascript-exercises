const palindromes = function (stringCandidate) {
    const punctuation = [",", ".", "!", "?", ":", ";", " "];
    const cleaned = [...stringCandidate.toLowerCase()]
        .filter(c => !punctuation.includes(c));
    
    const invertedString = [...cleaned].reverse().join("");

    if (cleaned.join("") === invertedString) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
