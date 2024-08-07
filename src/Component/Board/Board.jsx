import { Hangman } from '../Hangman/Hangman'
import Playgame from '../Playgame/Playgame'
import './Board.css'

function Board(){
    return(
        <>
            <div className="board">
                <Playgame />
            </div>
        </>
    )
}

export default Board