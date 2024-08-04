import { useState } from "react"
import { Randomwords } from "../Randomwords/Randomwords"

function Playgame(){
    const [randomobj, setObj] = useState(Randomwords)
    const [usedLetters , setLetters] = useState([])
    return(
        <>
            <h1>Welcome to The Hangman Game</h1>
            <p>Hint:-{randomobj.hint}</p>
        </>
    )
}

export default Playgame