import { useEffect, useState } from 'react'
import './Winner.css'

export function WinnerBox({display , onclickHandle , content}){
    
    return (
        <>
            <div className="Parent" style={{display}}>
                <div className='child'>
                    {content}
                </div>
                <div className='btn'><button className='Restart' onClick={onclickHandle}>Restart</button></div>
            </div>
        </>
    )
}