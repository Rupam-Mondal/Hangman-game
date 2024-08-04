export function Randomwords(){
    const wordsWithHints = [
        { word: "apple", hint: "fruit" },
        { word: "carrot", hint: "vegetable" },
        { word: "pizza", hint: "italian" },
        { word: "sushi", hint: "japanese" },
        { word: "bread", hint: "bakery" },
        { word: "cheese", hint: "dairy" },
        { word: "burger", hint: "fastfood" },
        { word: "steak", hint: "meat" },
        { word: "salmon", hint: "fish" },
        { word: "rice", hint: "grain" }
    ];

    const randomIndex = Math.floor(Math.random() * 10)
    return wordsWithHints[randomIndex]

}