

const Button = ({color,text,onClick}) => {

    return (
        <button onClick={onClick} style={{ backgroundColor:color }} className='btn'>{text}</button>
    )
}

Button.defaultPrope={
    color:'steelblue'
}

export default Button
