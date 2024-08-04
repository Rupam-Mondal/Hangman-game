export function Maskedlogic(word , usedLetters){
    const newArray = word.toUpperCase().split('')
    const usedLetterset = new Set(usedLetters)
    let characters = ""
    newArray.map((v , i) => {
        if(usedLetterset.has(v)){
            characters += v
        }
        else{
            characters += '_'
        }
    })
    return characters
}