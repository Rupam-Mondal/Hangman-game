import { useEffect, useState } from 'react'
import './Winner.css'

export function WinnerBox({winner , onclickHandle}){
    const[display , setDisplay] = useState('none')
    useEffect(() => {
        if(winner){
            setDisplay('block')
        }
    },[winner])
    return (
        <>
            <div className="Parent" style={{display}}>
                <div className='child'>
                    You Won!
                </div>
                <div className='btn'><button className='Restart' onClick={onclickHandle}>Restart</button></div>
            </div>
        </>
    )
}