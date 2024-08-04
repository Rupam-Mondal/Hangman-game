import './Button.css'
function Button({value , onclickHandler}){
    return (
        <>
            <button className="button" onClick={onclickHandler}>{value}</button>
        </>
    )
}

export default Button