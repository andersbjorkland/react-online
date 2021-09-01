const Button = ({callback, ...props}) => (
    <button onClick={callback}>
        {props.children}
    </button>

);

export default Button;