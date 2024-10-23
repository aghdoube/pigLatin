

// Get input 
const input = process.argv[2];

// Function to convert 
function convert(word) {
    const firstLetter = word.charAt(0).toLowerCase();
    const firstTwoLetters = word.slice(0, 2).toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Rule 1: If the word starts with a vowel Add "way" to the end
    if (vowels.includes(firstLetter)) {
        return word + "way";
    }
    
    // Rule 2: If the word starts with two consonants Move two consonants to the end
    if (firstTwoLetters.length === 2 
        && !vowels.includes(firstLetter) 
        && !vowels.includes(firstTwoLetters[1])) {
        return word.slice(2) + firstTwoLetters + "ay"; 
    }
    
    // Rule 3: If the word starts with a consonant Move one consonant to the end
    return word.slice(1) + firstLetter + "ay"; 
}

// Handle the input 
if (input) {
    const words = input.split(' '); // Split the input 
    const translatedWords = words.map(word => convert(word)); // Convert  words
    const translatedPhrase = translatedWords.join(' '); // Join the words
    
    // Output the translated phrase
    console.log(translatedPhrase); 
} else {
    console.log("Please write some Text."); 
}
