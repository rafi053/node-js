const fs = require("fs");
const _ = require('lodash');


const readFile = () => {
    const text = fs.readFileSync("./data/data.txt", "utf8");
    return text;
}

const readText = readFile();
const splitText = readFile().split(" ");
const uniqText = _.uniq(splitText);

const wordsCount = () => {
    const text = splitText.length;
    return text;
}


const reverseFile = () => {
    const text = _.reverse(splitText).join(" ");
    return text;
}


const uniqWords = () => {
    const text = uniqText.join(" ");
    return text;
}

const uniqWordsCount = () => {
    const text = uniqText.length;
    return text;
}


const uniqWordsUpper = () => {
    const text = _.upperCase(uniqWords());
    return text;
}

const uniqWordsGreaterThanFive = () => {
    const text = _.length(uniqText, 5);
}

console.log(uniqWordsUpper());
// console.log(uniqText);




