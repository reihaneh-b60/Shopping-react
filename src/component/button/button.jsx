const Button = (props) => {

    return (
        <button {...props} className={'w-100 btn btn-danger rounded-4'} >{props.children} </button>
    )
}
export default Button;