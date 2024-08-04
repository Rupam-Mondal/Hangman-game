import { Maskedlogic } from "./Maskedlogic"
import './MaskedText.css'

function MaskedText({word , usedLetters}){
    console.log(word)
    const w = Maskedlogic(word , usedLetters)
    console.log(w)
    return(
        <>
            <div className="maskedtext"><p>{w}</p></div>
        </>
    )
}

export default MaskedText