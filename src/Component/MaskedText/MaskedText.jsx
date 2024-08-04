import { useState } from "react"
import { Maskedlogic } from "./Maskedlogic"
import './MaskedText.css'

function MaskedText({word , usedLetters}){
    const letters = Maskedlogic(word , usedLetters).split('')
    return(
        <>
            <div className="maskedtext">
                {
                    letters.map((v , i) => (
                        <div><p>{v}</p></div>
                    ))
                }
            </div>
        </>
    )
}

export default MaskedText