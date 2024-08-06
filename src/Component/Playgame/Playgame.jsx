import { useEffect, useState } from "react"
import { Randomwords } from "../Randomwords/Randomwords"
import MaskedText from "../MaskedText/MaskedText"
import Keyboardkeys from "../Keyboardkeys/Keyboardkey"
import './hint.css'
import { RuleBox } from "../Rulebox/RuleBox"
import { WinnerBox } from "../WinnerBox/WinnerBox"
import { CheckWinner } from "./WinnigLogic"

function Playgame(){
    const [randomobj, setObj] = useState(Randomwords)
    const [usedLetters, setLetters] = useState([])
    const objectword = randomobj.word.toUpperCase()
    const [winningString, setWinningString] = useState("");
    const [winner , setWinner] = useState(false)

    const [display, setDisplay] = useState('none')
    useEffect(() => {
        if (winner) {
            setDisplay('block')
        }
    }, [winner])
    function Restart(){
        setObj(Randomwords)
        setLetters([])
        setDisplay('none')
    }


    useEffect(() => {
        console.log(winningString)
    } , [winningString])

    useEffect(() => {
        const winner = CheckWinner(randomobj.word, usedLetters);
        if (winner) {
            console.log("Winner")
            setWinner(true)
            return
        }
    }, [usedLetters, randomobj.word]);

    function handleclick(e) {
        if(!winner){
            if (objectword.includes(e)) {
                setWinningString(prev => prev + e);
                console.log("Correct")
            }
            else {
                console.log("Incorrect")
            }
            setLetters([...usedLetters, e])
        }
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
                word={objectword}
                usedletter={usedLetters}
            />
            <button className="resetBtn" onClick={resetHandler}>Reset</button>
            <RuleBox/>
            <WinnerBox 
            display={display}
            onclickHandle={Restart}
            />
        </>
    )
}

export default Playgame