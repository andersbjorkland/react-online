import timedClickHandler from "../utilities/timedClickHandler";

const Button = ({callback, ...props}) => (
    <button onClick={() => timedClickHandler(callback)}>
        {props.children}
    </button>

);

export default Button;