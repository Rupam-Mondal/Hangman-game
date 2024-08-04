import { useEffect, useState } from "react"
import { Randomwords } from "../Randomwords/Randomwords"
import MaskedText from "../MaskedText/MaskedText"
import Keyboardkeys from "../Keyboardkeys/Keyboardkey"
import './hint.css'
import { RuleBox } from "../Rulebox/RuleBox"

function Playgame(){
    const [randomobj, setObj] = useState(Randomwords)
    const [usedLetters, setLetters] = useState([])
    const objectword = randomobj.word.toUpperCase()
    const [winningString, setWinningString] = useState("");
    useEffect(() => {
        console.log(winningString)
    } , [winningString])

    function handleclick(e) {
        if(objectword.includes(e)){
            setWinningString(prev => prev + e);
            console.log("Correct")
        }
        else{
            console.log("Incorrect")
        }
        setLetters([...usedLetters, e])
    }

    function resetHandler(){
        setObj(Randomwords)
        setLetters([])
    }
    return(
        <>
            <h1>Welcome to The Hangman Game</h1>
            <MaskedText
                word={randomobj.word}
                usedLetters={usedLetters}
            />
            <p className="hint">Hint:-{randomobj.hint}</p>
            <Keyboardkeys
                onclickHandler={handleclick}
            />
            <button className="resetBtn" onClick={resetHandler}>Reset</button>
            <RuleBox/>
        </>
    )
}

export default Playgame