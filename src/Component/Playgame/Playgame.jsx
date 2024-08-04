import { useState } from "react"
import { Randomwords } from "../Randomwords/Randomwords"
import MaskedText from "../MaskedText/MaskedText"

function Playgame(){
    const [randomobj, setObj] = useState(Randomwords)
    const [usedLetters , setLetters] = useState(['A' , 'C'])
    return(
        <>
            <h1>Welcome to The Hangman Game</h1>
            <p>Hint:-{randomobj.hint}</p>
            <MaskedText
                word={randomobj.word}
                usedLetters={usedLetters}
            />
        </>
    )
}

export default Playgame