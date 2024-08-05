export function CheckWinner(word , guessedlettrs){
    const newWord = word.toUpperCase()
    const wordSet = new Set(newWord)

    const guessSet = new Set(guessedlettrs)
    for(let letter of newWord){
        if(!guessSet.has(letter)){
            return false
        }
    }
    return true
}