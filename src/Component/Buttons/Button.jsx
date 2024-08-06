
function Button({value , onclickHandler , className}){
    return (
        <>
            <button className={className} onClick={onclickHandler}>{value}</button>
        </>
    )
}

export default Button