import Button from "../Buttons/Button";
import "./Keyboard.css"

function Keyboardkeys({onclickHandler}){
    const ALPHABETS = new Array(26).fill('').map((e, index) => String.fromCharCode(65 + index));
    return(
        <>
            <div className="keyboard">
                {
                    ALPHABETS.map((v , e) => (
                        <Button
                            value={v}
                            onclickHandler={onclickHandler}
                            key={e}
                        />
                    ))
                }
            </div>
        </>
    )
}


export default Keyboardkeys