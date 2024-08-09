import { useState } from 'react'
import './Rule.css'

export function RuleBox(){
    const [display , setDisplay] = useState('block')
    function onclickHandler(){
        setDisplay('none')
    }
    return(
        <>
            <div className="Parent" style={{ display }}>
                <div className='rulebox'>
                    <h1>Rules</h1>
                    <div className='note-txt'>Welcome to the Hangman Game! The objective of this game is to guess a hidden word based on the provided hint. At the beginning of the game, a random word and its corresponding hint are selected. The word is displayed as a series of underscores, with each underscore representing a letter in the word. Number of attemps are word length + 3.
                        
                        click Start button below to start the game
                    </div>
                    <button className='str-btn' onClick={onclickHandler}>Start Game</button>
                </div>
            </div>
        </>
    )
}