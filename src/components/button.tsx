
type ButtonType = 'default' | 'inverted';

const BUTTON_TYPE_CLASSES: Record<ButtonType, string> = {
    default: '',
    inverted: 'inverted'
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType?: ButtonType;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, buttonType = 'default', ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;