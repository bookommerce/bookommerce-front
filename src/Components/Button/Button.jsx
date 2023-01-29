import { ButtonStyle } from "./ButtonStyles";

const Button = ({ type, text, disabled }) => {
    return <ButtonStyle type={type} disabled={disabled}>{text}</ButtonStyle>
}

export default Button;