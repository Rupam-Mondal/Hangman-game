import { useState } from "react"
import { Randomwords } from "../Randomwords/Randomwords"
import MaskedText from "../MaskedText/MaskedText"
import Keyboardkeys from "../Keyboardkeys/Keyboardkey"
import './hint.css'

function Playgame(){
    const [randomobj, setObj] = useState(Randomwords)
    const [usedLetters , setLetters] = useState(['A' , 'C'])
    return(
        <>
            <h1>Welcome to The Hangman Game</h1>
            <MaskedText
                word={randomobj.word}
                usedLetters={usedLetters}
            />
            <p className="hint">Hint:-{randomobj.hint}</p>
            <Keyboardkeys/>
        </>
    )
}

export default Playgame