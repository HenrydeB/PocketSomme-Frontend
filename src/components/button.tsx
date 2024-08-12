
import { ButtonType } from "../types/buttonType";

const BUTTON_TYPE_CLASSES: Record<ButtonType, string> = {
    default: '',
    inverted: 'inverted'
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType?: ButtonType;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, buttonType = 'default', ...otherProps}) => {
    const buttonStyles: string = BUTTON_TYPE_CLASSES[buttonType] === 'inverted' ?
                                " bg-cream text-burgundy border border-burgundy hover:text-cream hover:bg-burgundy" :
                                " bg-burgundy text-cream hover:bg-cream hover:text-burgundy hover:border hover:border-burgundy";

    return (
        <button className={`button-container min-w-[165px] h-12 px-8 py-0 text-base font-bold font-default uppercase tracking-tight cursor-pointer flex items-center justify-center transition-colors duration-300 ease-in-out` + buttonStyles} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;