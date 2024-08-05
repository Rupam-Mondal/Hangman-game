import { useEffect, useState } from 'react'
import './Winner.css'

export function WinnerBox({display , onclickHandle}){
    
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