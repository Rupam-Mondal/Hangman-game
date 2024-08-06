import Button from "../Buttons/Button";
import "./Keyboard.css"

function Keyboardkeys({onclickHandler , usedletter , word}){
    const ALPHABETS = new Array(26).fill('').map((v, index) => String.fromCharCode(65 + index));
    const usedletterSet = new Set(usedletter)
    const wordSet = new Set(word.toUpperCase())
    function backGroundColor(v){
        if(usedletterSet.has(v)){
            if(wordSet.has(v)){
                return 'greenClass'
            }
            else{
                return 'redClass'
            }
        }
        else{
            return 'button'
        }
    }

    return(
        <>
            <div className="keyboard">
                {
                    ALPHABETS.map((v , i) => (
                        <Button
                            value={v}
                            onclickHandler={() =>{
                                onclickHandler(v)
                            }}
                            key={i}
                            className={`${backGroundColor(v)}`}
                        />
                    ))
                }
            </div>
        </>
    )
}


export default Keyboardkeys