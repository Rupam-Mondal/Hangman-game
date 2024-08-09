import { useEffect, useState } from "react"
import { Randomwords } from "../Randomwords/Randomwords"
import MaskedText from "../MaskedText/MaskedText"
import Keyboardkeys from "../Keyboardkeys/Keyboardkey"
import './hint.css'
import { RuleBox } from "../Rulebox/RuleBox"
import { WinnerBox } from "../WinnerBox/WinnerBox"
import { CheckWinner } from "./WinnigLogic"
import { Hangman } from "../Hangman/Hangman"

function Playgame() {
    const [randomobj, setObj] = useState(Randomwords)
    const [usedLetters, setLetters] = useState([])
    const objectword = randomobj.word.toUpperCase()
    const [winningString, setWinningString] = useState("");
    const [winner, setWinner] = useState(false)
    const [step , setStep] = useState(0)
    const [attempt , setAttemp] = useState(0)
    const [gameover , setGameOver] = useState(false)

    const [display, setDisplay] = useState('none')
    useEffect(() => {
        if (winner && !gameover) {
            setDisplay('block')
        }
        if(gameover){
            setDisplay('block')
        }
    }, [winner , gameover])
    function Restart() {
        setObj(Randomwords)
        setLetters([])
        setDisplay('none')
        setWinner(false)
        setAttemp(0)
        setStep(0)
    }


    useEffect(() => {
        console.log(winningString)
    }, [winningString])

    useEffect(() => {
        const winner = CheckWinner(randomobj.word, usedLetters);
        if (winner) {
            console.log("Winner")
            setWinner(true)
            return
        }
    }, [usedLetters, randomobj.word]);

    function handleclick(e) {
        if (!winner) {
            if (objectword.includes(e)) {
                setAttemp(attempt + 1)
                if(attempt >= objectword.length + 3){
                    setGameOver(true)
                }
                setWinningString(prev => prev + e);
                console.log("Correct")
            }
            else {
                setAttemp(attempt + 1)
                setStep(step + 1)
                if (attempt >= objectword.length + 3) {
                    setGameOver(true)
                }
                console.log("Incorrect")
            }
            setLetters([...usedLetters, e])
        }
    }
    function resetHandler() {
        setObj(Randomwords)
        setLetters([])
    }
    return (
        <>
            <div className="left-div">
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
                <RuleBox />
                <WinnerBox
                    display={display}
                    onclickHandle={Restart}
                    content={gameover? "Game over":"You won!"}
                />
            </div>
            <div className="right-div">
                <div>{`Number of attemps : ${attempt}`}</div>
                <Hangman
                    step={step}
                />
            </div>
        </>
    )
}

export default Playgame