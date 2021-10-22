import './Button.css'

const Button = props => {
    const className = 'button ' + props.className;
    return <button className={className}>{props.children}</button>;
}
export default Button;