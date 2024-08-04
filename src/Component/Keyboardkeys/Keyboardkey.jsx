import Button from "../Buttons/Button";
import "./Keyboard.css"

function Keyboardkeys({onclickHandler}){
    const ALPHABETS = new Array(26).fill('').map((v, index) => String.fromCharCode(65 + index));
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
                        />
                    ))
                }
            </div>
        </>
    )
}


export default Keyboardkeys